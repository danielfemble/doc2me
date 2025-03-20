
/**
 * Utility for connecting to Google Sheets via a publicly deployed web app
 * Note: This requires setting up a Google Apps Script deployment first
 */

interface SignupData {
  name: string;
  email: string;
  clinic: string;
  timestamp?: string;
}

/**
 * Sends signup data to a Google Sheet via deployed Google Apps Script
 * The user needs to set up a Google Apps Script and deploy it as a web app
 */
export const sendToGoogleSheets = async (
  data: SignupData, 
  sheetUrl: string
): Promise<boolean> => {
  if (!sheetUrl) {
    console.error("No Google Sheet URL provided");
    return false;
  }

  try {
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(sheetUrl, {
      method: 'POST',
      mode: 'no-cors', // This is necessary for cross-origin requests to Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp),
    });
    
    // Since mode is 'no-cors', we can't directly check the response
    // We'll assume success if no error is thrown
    console.log('Data sent to Google Sheets');
    return true;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return false;
  }
};
