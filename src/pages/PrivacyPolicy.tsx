
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
          
          <p className="mb-6">
            Our privacy policy is available on our main website. Please use the link below to access it:
          </p>
          
          <div className="mb-8">
            <a 
              href="https://doc2me.co/privacy-policy" 
              className="inline-block bg-doc-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Privacy Policy
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-gray-600">
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
