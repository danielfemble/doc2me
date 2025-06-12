
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

// Declare Iubenda types for TypeScript
declare global {
  interface Window {
    _iub?: {
      csConfiguration?: {
        reloadOnConsentChange?: boolean;
      };
      csReload?: () => void;
    };
    iubenda?: {
      embed?: () => void;
    };
  }
}

const Privacy = () => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Function to remove existing Iubenda script and content
  const cleanupIubenda = () => {
    // Remove existing script
    const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear existing embeds
    const existingEmbeds = document.querySelectorAll('.iub-container, .iub-body-embed');
    existingEmbeds.forEach(embed => embed.remove());
    
    // Clear Iubenda from window
    delete window.iubenda;
    delete window._iub;
    
    setScriptLoaded(false);
  };

  // Load Iubenda script
  const loadIubendaScript = () => {
    if (scriptLoaded) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.iubenda.com/iubenda.js';
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Iubenda script loaded for language:', language);
      
      // Initialize embeds after script loads
      setTimeout(() => {
        if (window.iubenda && window.iubenda.embed) {
          window.iubenda.embed();
        }
      }, 100);
    };
    script.onerror = () => {
      console.error('Failed to load Iubenda script');
    };
    
    document.head.appendChild(script);
  };

  // Initial load
  useEffect(() => {
    loadIubendaScript();
  }, []);

  // Handle language changes
  useEffect(() => {
    if (!scriptLoaded) return;
    
    // Clean up and reload script for language change
    cleanupIubenda();
    
    // Small delay to ensure cleanup is complete
    setTimeout(() => {
      loadIubendaScript();
    }, 100);
  }, [language]);

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'} | Doc2Me</title>
      </Helmet>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex justify-center">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            <Button
              variant={language === 'de' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('de')}
              className="px-4 py-2"
            >
              Deutsch
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="px-4 py-2"
            >
              English
            </Button>
          </div>
        </div>

        <div key={`${language}-${scriptLoaded}`}>
          {language === 'de' ? (
            <div>
              <a 
                href="https://www.iubenda.com/privacy-policy/92059710" 
                className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
                title="Datenschutzerklärung"
              >
                Datenschutzerklärung
              </a>
            </div>
          ) : (
            <div>
              <a 
                href="https://www.iubenda.com/privacy-policy/39385510" 
                className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Privacy;
