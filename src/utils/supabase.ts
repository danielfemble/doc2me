
import { supabase } from "@/integrations/supabase/client";

// Export the client
export { supabase };

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // We're using the auto-generated client which is always configured
};

// Export a function to check if Supabase client is initialized
export const isClientInitialized = () => {
  return true; // We're using the auto-generated client which is always initialized
};

interface SignupData {
  name: string;
  email: string;
  clinic: string;
  created_at?: string;
}

/**
 * Sends signup data to Supabase
 */
export const sendToSupabase = async (data: SignupData): Promise<boolean> => {
  try {
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...data,
      created_at: new Date().toISOString(),
    };

    console.log('Attempting to send data to Supabase...', dataWithTimestamp);
    
    // Insert the data into the signups table with correct column names
    const { error } = await supabase
      .from('signups')
      .insert([{
        "Your Name": data.name,
        "Email": data.email,
        "Clinic or Practice Name": data.clinic,
        "created_at": dataWithTimestamp.created_at
      }]);
    
    if (error) {
      console.error('Error sending data to Supabase:', error);
      
      // Try fallback approach using edge function if available
      try {
        console.log('Attempting edge function fallback...');
        const payload = {
          type: "signup",
          record: {
            "Your Name": data.name,
            "Email": data.email,
            "Clinic or Practice Name": data.clinic,
            "created_at": new Date().toISOString()
          }
        };
        
        console.log('Edge function payload:', payload);
        
        // Use the full URL with correct anon key handling for browser environment
        const response = await fetch('https://eaqecvrbzwhdkxnndfkw.supabase.co/functions/v1/save-form-submission', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhcWVjdnJiendoZGt4bm5kZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDE0MTUsImV4cCI6MjA1ODA3NzQxNX0.8m6A8lNVG5A-BqFCQ28nDUuu7sXhsm-cPgHgzbZCL6I'
          },
          body: JSON.stringify(payload)
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('Edge function response (' + response.status + '):', result);
          console.log('Signup sent via edge function successfully');
          return true;
        } else {
          const errorText = await response.text();
          console.error('Edge function failed:', errorText);
          return false;
        }
      } catch (edgeError) {
        console.error('Edge function fallback failed:', edgeError);
        return false;
      }
    }
    
    console.log('Data sent to Supabase successfully');
    return true;
  } catch (error) {
    console.error('Error sending data to Supabase:', error);
    return false;
  }
};

/**
 * Check if signups table exists in Supabase
 */
export const checkSignupsTable = async (): Promise<boolean> => {
  try {
    // Try to query the signups table
    const { error } = await supabase
      .from('signups')
      .select('id', { count: 'exact', head: true });
      
    return !error;
  } catch (error) {
    console.error('Error checking signups table:', error);
    return false;
  }
};
