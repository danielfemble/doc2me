
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
              <h2 className="text-2xl font-semibold">About Us</h2>
              <p>Doc2Me GmbH</p>
              <p>Möllendorffstr. 45, 10367 Berlin, Deutschland</p>
              <p>E-Mail: privacy@doc2me.com</p>
              <p>Vertreten durch: George Augusto Batista, Geschäftsführer</p>
              <p>Handelsregister: HRB 223666 B (Handelsregister Berlin-Charlottenburg)</p>
              <p>USt-IdNr.: DE343967648</p>
              
              <h2 className="text-2xl font-semibold mt-8">1. An overview of data protection</h2>
              
              <h3 className="text-xl font-semibold mt-6">General information</h3>
              <p>
                The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term "personal data" comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Data recording on this website</h3>
              <p>
                <strong>Who is the responsible party for the recording of data on this website (i.e., the "controller")?</strong>
              </p>
              <p>
                The data on this website is processed by the operator of the website, whose contact information is available under section "Information about the responsible party (referred to as the "controller" in the GDPR)" in this privacy policy.
              </p>
              
              <p>
                <strong>How do we record your data?</strong>
              </p>
              <p>
                We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.
                Our IT systems automatically record other data when you visit our website. This data comprises primarily technical information (e.g., web browser, operating system, or time of the page call). This information is recorded automatically when you access this website.
              </p>
              
              <p>
                <strong>What are the purposes we use your data for?</strong>
              </p>
              <p>
                A portion of the information is generated to guarantee the error-free provision of the website. Other data may be used to analyze your user patterns.
              </p>
              
              <p>
                <strong>What rights do you have as far as your information is concerned?</strong>
              </p>
              <p>
                You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. You also have the right to log a complaint with the competent supervising agency.
                Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Analysis tools and tools provided by third parties</h3>
              <p>
                There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.
                For detailed information about these analysis programs please consult our Data Protection Declaration below.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">2. Hosting</h2>
              <p>We are hosting the content of our website at the following provider:</p>
              
              <h3 className="text-xl font-semibold mt-6">External Hosting</h3>
              <p>
                This website is hosted externally. Personal data collected on this website are stored on the servers of the host. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract information, contact information, names, web page access, and other data generated through a web site.
              </p>
              <p>
                The external hosting serves the purpose of fulfilling the contract with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR).
              </p>
              <p>
                If appropriate, and in accordance with Art. 28 GDPR, our host will process your data only to the extent necessary to fulfill its performance obligations and to follow our instructions with respect to such data.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">3. General information and mandatory information</h2>
              
              <h3 className="text-xl font-semibold mt-6">Data protection</h3>
              <p>
                The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
              </p>
              <p>
                Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.
              </p>
              <p>
                We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Information about the responsible party (referred to as the "controller" in the GDPR)</h3>
              <p>The data processing controller on this website is:</p>
              <p>Doc2Me GmbH</p>
              <p>Möllendorffstr. 45, 10367 Berlin, Deutschland</p>
              <p>E-Mail: privacy@doc2me.com</p>
              <p>Vertreten durch: George Augusto Batista, Geschäftsführer</p>
              
              <p>
                The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).
              </p>
            </div>
          ) : (
            <div className="privacy-content space-y-6">
              <h2 className="text-2xl font-semibold">Über uns</h2>
              <p>Doc2Me GmbH</p>
              <p>Möllendorffstr. 45, 10367 Berlin, Deutschland</p>
              <p>E-Mail: privacy@doc2me.com</p>
              <p>Vertreten durch: George Augusto Batista, Geschäftsführer</p>
              <p>Handelsregister: HRB 223666 B (Handelsregister Berlin-Charlottenburg)</p>
              <p>USt-IdNr.: DE343967648</p>
              
              <h2 className="text-2xl font-semibold mt-8">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mt-6">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              
              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Analyse-Tools und Tools von Drittanbietern</h3>
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">2. Hosting</h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
              
              <h3 className="text-xl font-semibold mt-6">Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mt-6">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>Doc2Me GmbH</p>
              <p>Möllendorffstr. 45, 10367 Berlin, Deutschland</p>
              <p>E-Mail: privacy@doc2me.com</p>
              <p>Vertreten durch: George Augusto Batista, Geschäftsführer</p>
              
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>
          )}
          
          <div className="mt-8 border-t border-gray-200 pt-6 text-gray-600">
            <p>
              {language === 'en' ? (
                <>
                  If you have any questions about our privacy policy, please contact us at{' '}
                  <a href="mailto:privacy@doc2me.com" className="text-doc-blue hover:underline">
                    privacy@doc2me.com
                  </a>
                </>
              ) : (
                <>
                  Wenn Sie Fragen zu unserer Datenschutzerklärung haben, kontaktieren Sie uns bitte unter{' '}
                  <a href="mailto:privacy@doc2me.com" className="text-doc-blue hover:underline">
                    privacy@doc2me.com
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
