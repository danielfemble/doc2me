
// Follow Deno's TS syntax
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get request data
    const data = await req.json();
    console.log('Received data:', data);

    // Create Supabase client with environment variables or fallback values
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://eaqecvrbzwhdkxnndfkw.supabase.co';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhcWVjdnJiendoZGt4bm5kZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDE0MTUsImV4cCI6MjA1ODA3NzQxNX0.8m6A8lNVG5A-BqFCQ28nDUuu7sXhsm-cPgHgzbZCL6I';
    
    const supabaseClient = createClient(
      supabaseUrl,
      supabaseKey,
      { 
        global: { 
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Extract record from payload
    const { type, record } = data;
    let dbInsertSuccess = false;
    let emailSent = false;
    
    console.log('Processing submission type:', type);
    console.log('Record to insert:', record);

    // Insert data based on type
    if (type === 'signup') {
      // Insert into signups table
      const { error } = await supabaseClient
        .from('signups')
        .insert([record]);
      
      dbInsertSuccess = !error;
      
      if (error) {
        console.error('Database insert error:', error);
        
        // Try direct REST API as a fallback
        try {
          console.log('Attempting direct REST API call...');
          const directResponse = await fetch(
            `${supabaseUrl}/rest/v1/signups`, 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify(record)
            }
          );
          
          if (directResponse.ok) {
            console.log('Direct REST API insert successful');
            dbInsertSuccess = true;
          } else {
            console.error('Direct REST API insert failed:', await directResponse.text());
          }
        } catch (restError) {
          console.error('Direct REST API error:', restError);
        }
      }
      
      // Try to send email notification regardless of DB success
      try {
        // Simple email content with the signup data
        const emailContent = `
          New signup received:
          Name: ${record["Your Name"]}
          Email: ${record["Email"]}
          Clinic: ${record["Clinic or Practice Name"]}
          Time: ${record["created_at"]}
        `;
        
        // Send email notification if RESEND_API_KEY is configured
        const resendKey = Deno.env.get('RESEND_API_KEY');
        if (resendKey) {
          const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${resendKey}`
            },
            body: JSON.stringify({
              from: 'Doc2Me <noreply@doc2me.co>',
              to: 'daniel@doc2me.co',
              subject: 'New Doc2Me Signup',
              text: emailContent,
            })
          });
          
          if (emailResponse.ok) {
            console.log('Email notification sent');
            emailSent = true;
          } else {
            console.error('Failed to send email:', await emailResponse.text());
          }
        } else {
          console.log('No RESEND_API_KEY found, skipping email notification');
        }
      } catch (emailError) {
        console.error('Email notification error:', emailError);
      }
    } else {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid submission type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return appropriate response based on operations performed
    let message = '';
    if (dbInsertSuccess && emailSent) {
      message = 'Data saved and notification sent';
    } else if (dbInsertSuccess) {
      message = 'Data saved successfully';
    } else if (emailSent) {
      message = 'Email notification sent, but database insert failed';
    } else {
      message = 'Operations failed, but request was processed';
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        dbInsertSuccess, 
        emailSent, 
        message 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Server error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Server error processing request', 
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
