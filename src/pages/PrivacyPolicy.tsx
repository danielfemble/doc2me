
import { useEffect, useState } from 'react';
import { Footer } from "@/components";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    // Detect browser language
    const userLang = navigator.language || navigator.languages?.[0] || 'en';
    if (userLang.startsWith('de')) {
      setLanguage('de');
    }

    // Redirect to the dedicated privacy policy domain
    window.location.href = 'https://privacy-policy.doc2me.co';
  }, []);

  // This will only be shown briefly before the redirect happens
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
            >
              Deutsch
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center h-64">
          <p className="text-lg">Redirecting to privacy policy...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
