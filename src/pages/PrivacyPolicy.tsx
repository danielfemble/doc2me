
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

        <div className="iframe-container bg-white w-full h-[900px] border-4 border-[#f7f4ed] rounded-lg overflow-hidden">
          <iframe 
            src={language === 'de' 
              ? "https://drive.google.com/file/d/1DA9hjwkVn4Ui70QZr_gjY0W6mBdT0ZmI/preview" 
              : "https://drive.google.com/file/d/1DKjEvDc0_Pyjp5TlkpIj-DvVqvjxeqVD/preview"} 
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
