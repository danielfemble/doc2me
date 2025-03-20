
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
const hasSupabaseConfig = supabaseUrl && supabaseKey;

if (!hasSupabaseConfig) {
  console.warn('Supabase environment variables not found. Fallback mode enabled.');
}

// Create client if config is available, otherwise create a mock client
export const supabase = hasSupabaseConfig 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

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

    // If Supabase client is not available, log data and return success
    if (!supabase) {
      console.log('Supabase not configured. Form data received:', dataWithTimestamp);
      return true;
    }

    // Insert the data into the signups table
    const { error } = await supabase
      .from('signups')
      .insert([dataWithTimestamp]);
    
    if (error) {
      console.error('Error sending data to Supabase:', error);
      return false;
    }
    
    console.log('Data sent to Supabase successfully');
    return true;
  } catch (error) {
    console.error('Error sending data to Supabase:', error);
    return false;
  }
};
