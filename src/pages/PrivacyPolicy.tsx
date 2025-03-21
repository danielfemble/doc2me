
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
          <h1 className="text-3xl font-bold mb-8 text-doc-black">
            {language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
          </h1>
          
          {language === 'en' ? (
            <div className="privacy-content space-y-6">
              <p>
                This Privacy Policy describes how Doc2Me ("we", "us", or "our") collects, uses, and discloses your 
                personal information when you visit our website, use our platform, or engage with our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
              
              <p>
                We may collect personal information that you provide directly to us when you:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Create an account or profile</li>
                <li>Schedule or participate in a consultation</li>
                <li>Submit medical information</li>
                <li>Contact our support team</li>
                <li>Respond to surveys or questionnaires</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
              
              <p>
                We use your personal information for various purposes, including to:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill your requests</li>
                <li>Communicate with you about our services</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8">Data Security</h2>
              
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">Your Rights</h2>
              
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing of your personal information</li>
                <li>Data portability</li>
                <li>Objection to processing of your personal information</li>
              </ul>
              
              <p className="mt-8">
                For the complete and most up-to-date version of our Privacy Policy, please visit our main website at{' '}
                <a 
                  href="https://doc2me.co/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-doc-blue hover:underline"
                >
                  https://doc2me.co/privacy-policy
                </a>
              </p>
            </div>
          ) : (
            <div className="privacy-content space-y-6">
              <p>
                Diese Datenschutzerklärung beschreibt, wie Doc2Me ("wir", "uns" oder "unser") Ihre personenbezogenen 
                Daten erfasst, verwendet und offenlegt, wenn Sie unsere Website besuchen, unsere Plattform 
                nutzen oder unsere Dienste in Anspruch nehmen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">Informationen, die wir sammeln</h2>
              
              <p>
                Wir können personenbezogene Daten sammeln, die Sie uns direkt zur Verfügung stellen, wenn Sie:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Ein Konto oder Profil erstellen</li>
                <li>Eine Beratung planen oder daran teilnehmen</li>
                <li>Medizinische Informationen übermitteln</li>
                <li>Unser Support-Team kontaktieren</li>
                <li>Auf Umfragen oder Fragebögen antworten</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8">Wie wir Ihre Informationen verwenden</h2>
              
              <p>
                Wir verwenden Ihre personenbezogenen Daten für verschiedene Zwecke, unter anderem um:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Unsere Dienste bereitzustellen, zu pflegen und zu verbessern</li>
                <li>Ihre Anfragen zu bearbeiten und zu erfüllen</li>
                <li>Mit Ihnen über unsere Dienste zu kommunizieren</li>
                <li>Trends und Nutzung zu überwachen und zu analysieren</li>
                <li>Technische Probleme zu erkennen, zu verhindern und zu beheben</li>
                <li>Gesetzlichen Verpflichtungen nachzukommen</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8">Datensicherheit</h2>
              
              <p>
                Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten vor 
                unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung. Jedoch ist keine Methode der Übertragung 
                über das Internet oder Methode der elektronischen Speicherung 100% sicher.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">Ihre Rechte</h2>
              
              <p>
                Je nach Ihrem Standort haben Sie möglicherweise bestimmte Rechte in Bezug auf Ihre personenbezogenen Daten, wie z.B.:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Zugang zu Ihren personenbezogenen Daten</li>
                <li>Berichtigung ungenauer oder unvollständiger Informationen</li>
                <li>Löschung Ihrer personenbezogenen Daten</li>
                <li>Einschränkung der Verarbeitung Ihrer personenbezogenen Daten</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten</li>
              </ul>
              
              <p className="mt-8">
                Für die vollständige und aktuellste Version unserer Datenschutzerklärung besuchen Sie bitte unsere Hauptwebsite unter{' '}
                <a 
                  href="https://doc2me.co/de/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-doc-blue hover:underline"
                >
                  https://doc2me.co/de/privacy-policy
                </a>
              </p>
            </div>
          )}
          
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
