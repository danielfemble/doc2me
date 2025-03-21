
import { useState } from 'react';
import { Footer } from "@/components";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

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

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-doc-black">Privacy Policy</h1>
          
          {language === 'en' ? (
            <div className="responsive-iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '150%' }}>
              <iframe 
                src="https://doc2me.co/privacy-policy" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Privacy Policy"
              ></iframe>
            </div>
          ) : (
            <div className="responsive-iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '150%' }}>
              <iframe 
                src="https://doc2me.co/de/privacy-policy" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Datenschutzerklärung"
              ></iframe>
            </div>
          )}
          
          <div className="mt-8 border-t border-gray-200 pt-6 text-gray-600">
            <p>
              If you have any questions about our privacy policy, please contact us at{' '}
              <a href="mailto:support@doc2me.com" className="text-doc-blue hover:underline">
                support@doc2me.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
