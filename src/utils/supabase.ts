
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
    
    // Insert the data into the signups table with the correct structure
    const { error } = await supabase
      .from('signups')
      .insert([{
        "Your Name": data.name,
        "Email": data.email,
        "Clinic or Practice Name": data.clinic
      }]);
    
    if (error) {
      console.error('Error sending data to Supabase:', error);
      
      // If insertion fails, let's try to call our edge function as a fallback
      try {
        const response = await fetch('https://eaqecvrbzwhdkxnndfkw.supabase.co/functions/v1/handle-notifications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabase.auth.getSession().then(res => res.data.session?.access_token || '')}`
          },
          body: JSON.stringify({
            type: 'signup',
            record: {
              'Your Name': data.name,
              'Email': data.email,
              'Clinic or Practice Name': data.clinic
            }
          })
        });
        
        if (response.ok) {
          console.log('Signup sent via edge function as fallback');
          return true;
        } else {
          throw new Error('Edge function fallback failed');
        }
      } catch (fallbackError) {
        console.error('Fallback notification also failed:', fallbackError);
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
