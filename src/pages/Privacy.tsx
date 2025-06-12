
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

  // Load Iubenda script once
  useEffect(() => {
    if (scriptLoaded) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.iubenda.com/iubenda.js';
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Iubenda script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Iubenda script');
    };
    
    document.head.appendChild(script);
  }, []);

  // Initialize embeds when script loads or language changes
  useEffect(() => {
    if (!scriptLoaded) return;

    const timer = setTimeout(() => {
      // Clear any existing embedded content
      const existingEmbeds = document.querySelectorAll('.iub-container, .iub-body-embed');
      existingEmbeds.forEach(embed => {
        if (embed.parentNode) {
          embed.parentNode.removeChild(embed);
        }
      });
      
      // Force Iubenda to re-scan for embeds
      if (window.iubenda && window.iubenda.embed) {
        console.log('Initializing Iubenda embeds for language:', language);
        window.iubenda.embed();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [language, scriptLoaded]);

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

        <div key={language}>
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
