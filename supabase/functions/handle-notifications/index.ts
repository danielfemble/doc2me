
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log('Received notification:', JSON.stringify(payload));

    // Insert the signup data directly into the database
    if (payload.type === 'signup') {
      try {
        // Create Supabase client
        const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://eaqecvrbzwhdkxnndfkw.supabase.co';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        
        if (supabaseKey) {
          console.log('Attempting database insert with record:', JSON.stringify(payload.record));
          
          // Directly use the REST API for insertion - this is most reliable
          try {
            const res = await fetch(`${supabaseUrl}/rest/v1/signups`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify([payload.record])
            });
            
            if (!res.ok) {
              const errorText = await res.text();
              console.error('REST API insert failed:', res.status, errorText);
              throw new Error(`REST API error: ${res.status} - ${errorText}`);
            } else {
              console.log('Successfully inserted data using REST API');
            }
          } catch (restError) {
            console.error('REST API insert failed with exception:', restError);
            throw restError; // Re-throw to be caught by outer try/catch
          }
        } else {
          console.error('No SUPABASE_SERVICE_ROLE_KEY found - cannot save to database');
          throw new Error('Missing service role key');
        }
      } catch (dbError) {
        console.error('Database operation failed in edge function:', dbError);
        // We'll still try to send the email notification even if DB insert fails
      }
    }

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: 'Doc2Me <notifications@doc2me.co>',
      to: 'daniel@doc2me.co',
      subject: payload.type === 'signup' ? 'New Doc2Me Signup' : 'New Doc2Me Contact Form Submission',
      html: payload.record ? formatEmailContent(payload.type, payload.record) : 'New submission received',
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error handling notification:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

function formatEmailContent(type: string, record: any): string {
  if (type === 'signup') {
    return `
      <h2>New Signup Received</h2>
      <p><strong>Name:</strong> ${record['Your Name'] || 'N/A'}</p>
      <p><strong>Email:</strong> ${record['Email'] || 'N/A'}</p>
      <p><strong>Clinic:</strong> ${record['Clinic or Practice Name'] || 'N/A'}</p>
    `;
  } else {
    return `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${record.name || 'N/A'}</p>
      <p><strong>Email:</strong> ${record.email || 'N/A'}</p>
      <p><strong>Message:</strong> ${record.message || 'N/A'}</p>
    `;
  }
}
