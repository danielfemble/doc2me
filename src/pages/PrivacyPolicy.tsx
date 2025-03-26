
import { useState } from 'react';
import { Footer } from "@/components";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  
  // Updated PDF links with correct embed format
  const pdfLinks = {
    en: "https://drive.google.com/file/d/1DKjEvDc0_Pyjp5TlkpIj-DvVqvjxeqVD/preview",
    de: "https://drive.google.com/file/d/1DA9hjwkVn4Ui70QZr_gjY0W6mBdT0ZmI/preview"
  };

  return (
    <div className="bg-gradient-to-b from-[#0271e5]/10 to-white/90 min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </Link>
          
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
          <h1 className="text-3xl font-bold mb-8 text-doc-black">
            {language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
          </h1>
          
          <div className="pdf-container" style={{ height: '70vh', width: '100%' }}>
            <iframe 
              src={pdfLinks[language]}
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              allow="autoplay"
              title={language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
            ></iframe>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6 text-gray-600">
            <p>
              {language === 'en' ? (
                <>
                  If you have any questions about our privacy policy, please contact us at{' '}
                  <a href="mailto:support@doc2me.com" className="text-doc-blue hover:underline">
                    support@doc2me.com
                  </a>
                </>
              ) : (
                <>
                  Wenn Sie Fragen zu unserer Datenschutzerklärung haben, kontaktieren Sie uns bitte unter{' '}
                  <a href="mailto:support@doc2me.com" className="text-doc-blue hover:underline">
                    support@doc2me.com
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
