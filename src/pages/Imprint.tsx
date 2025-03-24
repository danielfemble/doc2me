
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Imprint = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold mb-8">Imprint</h1>
          
          <div className="prose max-w-none">
            <p><strong>Name:</strong> Femble GmbH</p>
            <p><strong>Owner:</strong> Mag. Lina Graf & Mag. Daniel Steiner</p>
            <p><strong>Registered office:</strong> Rettenbergstrasse 1, A-6111 Volders</p>
            <p><strong>Phone:</strong> +436642791198</p>
            <p><strong>Email:</strong> support@femble.co</p>
            <p><strong>Domain:</strong> www.femble.co</p>
            <p><strong>Companies' register number:</strong> FN 544213 P</p>
            <p><strong>Companies' registry court:</strong> Landesgericht Innsbruck</p>
            <p>Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a>. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten. Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">HAFTUNGSAUSSCHLUSS</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">Haftung für Inhalte dieser Webseite</h3>
            <p>Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Dienstanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Haftung für Links auf Webseiten Dritter</h3>
            <p>Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen Webseiten haben wir keinerlei Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Urheberrecht</h3>
            <p>Die Betreiber:innen dieser Webseite sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber:innen erstellten Inhalte und Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
