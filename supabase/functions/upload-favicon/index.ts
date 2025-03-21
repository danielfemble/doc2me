
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.34.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

// Create a Supabase client with the admin key
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // For this function, we'll be embedding a simple SVG directly rather than uploading a file
    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <rect width="32" height="32" fill="#2563EB" rx="6"/>
      <text x="6" y="22" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="white">D2</text>
    </svg>`;

    // Convert the SVG string to a Uint8Array
    const encoder = new TextEncoder();
    const faviconData = encoder.encode(faviconSvg);

    // Upload the favicon to Supabase storage
    const { data, error } = await supabaseClient
      .storage
      .from('public_assets')
      .upload('favicon.svg', faviconData, {
        contentType: 'image/svg+xml',
        upsert: true
      });

    if (error) {
      console.error('Error uploading favicon:', error);
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the public URL of the uploaded favicon
    const { data: { publicUrl } } = supabaseClient
      .storage
      .from('public_assets')
      .getPublicUrl('favicon.svg');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Favicon uploaded successfully', 
        url: publicUrl 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
