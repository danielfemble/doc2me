
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

// Declare Iubenda types for TypeScript
declare global {
  interface Window {
    _iub?: any;
  }
}

const Privacy = () => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    // Clean up any existing Iubenda scripts and reset the _iub object
    const existingScripts = document.querySelectorAll('script[src*="iubenda.js"]');
    existingScripts.forEach(script => script.remove());
    
    // Reset Iubenda global object
    if (window._iub) {
      delete window._iub;
    }

    // Small delay to ensure cleanup is complete
    const timer = setTimeout(() => {
      // Load fresh Iubenda script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.onload = () => {
        console.log('Iubenda script loaded and processing embeds for language:', language);
        // Force Iubenda to process the embeds after script loads
        if (window._iub && window._iub.init) {
          window._iub.init();
        }
      };
      document.head.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [contentKey, language]);

  // Force re-render when language changes
  useEffect(() => {
    setContentKey(prev => prev + 1);
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

        <div key={contentKey} id="iubenda-content">
          {language === 'de' ? (
            <div dangerouslySetInnerHTML={{
              __html: `<a href="https://www.iubenda.com/privacy-policy/92059710" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Datenschutzerklärung">Datenschutzerklärung</a>`
            }} />
          ) : (
            <div dangerouslySetInnerHTML={{
              __html: `<a href="https://www.iubenda.com/privacy-policy/39385510" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Privacy Policy">Privacy Policy</a>`
            }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Privacy;
