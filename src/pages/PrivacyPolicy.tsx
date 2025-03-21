
import { useEffect, useState } from 'react';
import { Footer } from "@/components";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Detect browser language
    const userLang = navigator.language || navigator.languages?.[0] || 'en';
    if (userLang.startsWith('de')) {
      setLanguage('de');
    }
    
    // Set a slight delay before redirecting to ensure the page renders first
    const redirectTimer = setTimeout(() => {
      setIsRedirecting(true);
      // Using /privacy-policy path instead of subdomain
      window.location.href = 'https://doc2me.co/privacy-policy';
    }, 1500);
    
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ed]">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </a>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md transition-colors ${
                language === 'en' 
                  ? 'bg-doc-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isRedirecting}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('de')}
              className={`px-4 py-2 rounded-md transition-colors ${
                language === 'de' 
                  ? 'bg-doc-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isRedirecting}
            >
              Deutsch
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <p className="text-lg font-medium">Redirecting to our privacy policy...</p>
          <p className="text-sm text-gray-600">
            If you are not redirected automatically, please {' '}
            <a 
              href="https://doc2me.co/privacy-policy" 
              className="text-doc-blue hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              click here
            </a>
          </p>
          <div className="mt-4 w-12 h-12 border-t-2 border-doc-blue rounded-full animate-spin"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
