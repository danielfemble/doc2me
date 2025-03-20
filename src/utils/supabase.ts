
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');

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
