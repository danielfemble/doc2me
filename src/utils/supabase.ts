
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
    console.log('Attempting to send signup data:', data);
    
    // First attempt: Try direct insertion to the signups table
    try {
      console.log('Attempting direct DB insert to signups table...');
      
      // Format the data according to the exact column names in the signups table
      const insertData = {
        "Your Name": data.name,
        "Email": data.email, 
        "Clinic or Practice Name": data.clinic,
        "created_at": new Date().toISOString()
      };
      
      console.log('Insert data structure:', insertData);
      
      const { error, data: responseData } = await supabase
        .from('signups')
        .insert([insertData]);
      
      if (error) {
        console.error('Direct DB insert failed:', error);
        throw error;
      }
      
      console.log('Direct DB insert succeeded:', responseData);
      return true;
    } catch (dbError) {
      console.error('Error in direct database insert, trying edge function fallback:', dbError);
      
      // Second attempt: Use the edge function fallback
      try {
        console.log('Attempting edge function fallback...');
        
        // Format the data according to the expected structure in the signups table
        const record = {
          'Your Name': data.name,
          'Email': data.email,
          'Clinic or Practice Name': data.clinic,
          'created_at': new Date().toISOString()
        };
        
        console.log('Edge function payload:', {
          type: 'signup',
          record: record
        });
        
        const response = await fetch('https://eaqecvrbzwhdkxnndfkw.supabase.co/functions/v1/handle-notifications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'signup',
            record: record
          })
        });
        
        const responseText = await response.text();
        console.log(`Edge function response (${response.status}):`, responseText);
        
        if (!response.ok) {
          console.error('Edge function responded with error:', response.status, responseText);
          throw new Error(`Edge function failed with status ${response.status}`);
        }
        
        console.log('Signup sent via edge function successfully');
        return true;
      } catch (fallbackError) {
        console.error('Edge function fallback also failed:', fallbackError);
        throw fallbackError;
      }
    }
  } catch (error) {
    console.error('Error in sendToSupabase function:', error);
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
