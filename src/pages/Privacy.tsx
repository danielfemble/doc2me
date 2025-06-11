
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
    };
  }
}

const Privacy = () => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    // Load Iubenda script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (w,d) {
        var loader = function () {
          var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
          s.src="https://cdn.iubenda.com/iubenda.js"; 
          tag.parentNode.insertBefore(s,tag);
        }; 
        if(w.addEventListener){
          w.addEventListener("load", loader, false);
        } else if(w.attachEvent){
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Trigger re-embedding when language changes
  useEffect(() => {
    // Small delay to ensure Iubenda script processes the new content
    const timer = setTimeout(() => {
      if (window._iub && window._iub.csConfiguration) {
        window._iub.csConfiguration.reloadOnConsentChange = true;
      }
    }, 100);

    return () => clearTimeout(timer);
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

        {language === 'de' ? (
          <div dangerouslySetInnerHTML={{
            __html: `<a href="https://www.iubenda.com/privacy-policy/92059710" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Datenschutzerklärung">Datenschutzerklärung</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`
          }} />
        ) : (
          <div dangerouslySetInnerHTML={{
            __html: `<a href="https://www.iubenda.com/privacy-policy/39385510" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Privacy Policy">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`
          }} />
        )}
      </div>
    </>
  );
};

export default Privacy;
