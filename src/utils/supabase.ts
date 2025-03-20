
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
const hasSupabaseConfig = supabaseUrl && supabaseKey;

// Add more detailed logging
console.log('Supabase configuration status:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseKey,
  isConfigComplete: hasSupabaseConfig
});

// Create client if config is available
let supabaseClient = null;

try {
  if (hasSupabaseConfig) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
    console.log('Supabase client created successfully');
  } else {
    console.warn('Supabase environment variables not found. Using fallback mode.');
  }
} catch (error) {
  console.error('Error initializing Supabase client:', error);
}

// Export the client
export const supabase = supabaseClient;

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
      console.log('Supabase client not available. Form data received:', dataWithTimestamp);
      
      // Try to use Google Sheets as fallback if configured
      try {
        const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
        if (googleSheetsUrl) {
          const { sendToGoogleSheets } = await import('./googleSheets');
          const success = await sendToGoogleSheets(dataWithTimestamp, googleSheetsUrl);
          if (success) {
            console.log('Data sent to Google Sheets as fallback');
          }
        }
      } catch (error) {
        console.error('Error using Google Sheets fallback:', error);
      }
      
      // Even in failure, we return true to not disrupt user experience
      return true;
    }

    console.log('Attempting to send data to Supabase...');
    
    // Insert the data into the signups table
    const { error } = await supabase
      .from('signups')
      .insert([dataWithTimestamp]);
    
    if (error) {
      console.error('Error sending data to Supabase:', error);
      // Check if it's a "relation does not exist" error (table missing)
      if (error.message && error.message.includes('relation "signups" does not exist')) {
        console.error('The "signups" table does not exist in your Supabase database. Please create it first.');
      }
      return false;
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
  if (!supabase) {
    console.warn('Supabase client not available. Cannot check signups table.');
    return false;
  }
  
  try {
    // Try to query the signups table
    const { error } = await supabase
      .from('signups')
      .select('count', { count: 'exact', head: true });
      
    return !error;
  } catch (error) {
    console.error('Error checking signups table:', error);
    return false;
  }
};
