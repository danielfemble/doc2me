
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.requestDemo': 'Request Demo',
    
    // Hero Section
    'hero.badge': 'AI for Patient Education',
    'hero.headline': 'Be more visible for patients',
    'hero.description': 'Where Patient Education meets Online Marketing. Scale your presence without scaling your workload. Create and share information wherever your existing and future Patients are.',
    'hero.requestDemo': 'Request Demo',
    
    // Features
    'features.title': 'Why Choose Doc2Me',
    'features.subtitle': 'Our platform helps medical professionals create personalized patient education materials in minutes.',
    'features.saveTime.title': 'Save Time',
    'features.saveTime.description': 'Create accurate patient education materials in minutes instead of hours.',
    'features.boostPresence.title': 'Boost Online Presence',
    'features.boostPresence.description': 'Increase your visibility with personalized health content that ranks on search engines.',
    'features.buildAuthority.title': 'Build Authority',
    'features.buildAuthority.description': 'Establish yourself as a trusted expert in your field with high-quality health information.',
    'features.betterOutcomes.title': 'Better Patient Outcomes',
    'features.betterOutcomes.description': 'Improve adherence and results with easy-to-understand health education materials.',
    'features.aiPowered.title': 'AI-Powered Content',
    'features.aiPowered.description': 'Leverage advanced AI to create medically accurate and personalized patient materials.',
    'features.medicallyVerified.title': 'Medically Verified',
    'features.medicallyVerified.description': 'All content is medically accurate and follows best practices in health communication.',
    
    // Explanation Section
    'explanation.title': 'Scale your online presence without scaling your workload',
    'explanation.aiGuided.title': 'AI Guided Creation',
    'explanation.aiGuided.description': 'Create short, informative videos explaining conditions and treatments in your own words and style. Get guidance by our AI.',
    'explanation.aiEnhancement.title': 'AI Enhancement',
    'explanation.aiEnhancement.description': 'Our AI technology polishes your doctor-led content, ensuring quality without replacing the authentic medical expertise.',
    'explanation.aiDistribution.title': 'AI Guided Distribution',
    'explanation.aiDistribution.description': 'Provide your patients a trusted source of health information - be it on your socials, website or directly on your doc2me profile.',
    
    // Pricing
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Select the option that best fits your practice needs',
    'pricing.contactPricing': 'Contact us for pricing',
    'pricing.single.title': 'Single Doctor',
    'pricing.single.description': 'Perfect for independent practitioners who want to enhance their online presence',
    'pricing.organization.title': 'Organization',
    'pricing.organization.description': 'Ideal for clinics, hospitals, and healthcare organizations with multiple practitioners',
    
    // Benefits
    'benefits.title': 'Why Health Providers Choose Us',
    'benefits.subtitle': 'Our platform helps you create medically accurate content that connects with patients and grows your practice.',
    'benefits.lessQuestions.title': 'Less Repetitive Questions',
    'benefits.lessQuestions.description': 'Provide complete information upfront so patients don\'t need to ask the same questions repeatedly.',
    'benefits.boostOnline.title': 'Boost Online Presence',
    'benefits.boostOnline.description': 'Grow your digital footprint with content that attracts patients searching for health information.',
    'benefits.buildTrust.title': 'Build Trust',
    'benefits.buildTrust.description': 'Establish credibility and trust with professionally crafted, accurate health content.',
    
    // CTA Section
    'cta.title': 'Request Demo Today',
    'cta.description': 'Experience how our platform can transform your patient education and practice growth. Our team will walk you through our solution designed specifically for healthcare professionals.',
    'cta.point1': 'Personalized demonstration tailored to your practice needs',
    'cta.point2': 'Learn how to create medical content that connects with patients',
    'cta.point3': 'Discover tools to boost your online presence and patient trust',
    'cta.point4': 'No commitment required - see the value before you decide',
    
    // Footer
    'footer.tagline': 'A better doctor-patient relationship',
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.copyright': 'All rights reserved.'
  },
  de: {
    // Navigation
    'nav.features': 'Funktionen',
    'nav.howItWorks': 'So funktioniert es',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',
    'nav.requestDemo': 'Demo anfordern',
    
    // Hero Section
    'hero.badge': 'KI für Patientenaufklärung',
    'hero.headline': 'Seien Sie sichtbarer für Patienten',
    'hero.description': 'Wo Patientenaufklärung auf Online-Marketing trifft. Skalieren Sie Ihre Präsenz, ohne Ihren Arbeitsaufwand zu skalieren. Erstellen und teilen Sie Informationen überall dort, wo Ihre bestehenden und zukünftigen Patienten sind.',
    'hero.requestDemo': 'Demo anfordern',
    
    // Features
    'features.title': 'Warum Doc2Me wählen',
    'features.subtitle': 'Unsere Plattform hilft Medizinern dabei, personalisierte Patientenaufklärungsmaterialien in wenigen Minuten zu erstellen.',
    'features.saveTime.title': 'Zeit sparen',
    'features.saveTime.description': 'Erstellen Sie präzise Patientenaufklärungsmaterialien in Minuten statt Stunden.',
    'features.boostPresence.title': 'Online-Präsenz stärken',
    'features.boostPresence.description': 'Erhöhen Sie Ihre Sichtbarkeit mit personalisierten Gesundheitsinhalten, die in Suchmaschinen ranken.',
    'features.buildAuthority.title': 'Autorität aufbauen',
    'features.buildAuthority.description': 'Etablieren Sie sich als vertrauenswürdiger Experte in Ihrem Fachgebiet mit hochwertigen Gesundheitsinformationen.',
    'features.betterOutcomes.title': 'Bessere Patientenergebnisse',
    'features.betterOutcomes.description': 'Verbessern Sie Therapietreue und Ergebnisse mit leicht verständlichen Gesundheitsaufklärungsmaterialien.',
    'features.aiPowered.title': 'KI-gestützte Inhalte',
    'features.aiPowered.description': 'Nutzen Sie fortschrittliche KI, um medizinisch präzise und personalisierte Patientenmaterialien zu erstellen.',
    'features.medicallyVerified.title': 'Medizinisch verifiziert',
    'features.medicallyVerified.description': 'Alle Inhalte sind medizinisch korrekt und folgen bewährten Praktiken in der Gesundheitskommunikation.',
    
    // Explanation Section
    'explanation.title': 'Skalieren Sie Ihre Online-Präsenz, ohne Ihren Arbeitsaufwand zu skalieren',
    'explanation.aiGuided.title': 'KI-geführte Erstellung',
    'explanation.aiGuided.description': 'Erstellen Sie kurze, informative Videos, die Krankheiten und Behandlungen in Ihren eigenen Worten und Ihrem Stil erklären. Lassen Sie sich von unserer KI führen.',
    'explanation.aiEnhancement.title': 'KI-Verbesserung',
    'explanation.aiEnhancement.description': 'Unsere KI-Technologie verfeinert Ihre arztgeführten Inhalte und gewährleistet Qualität, ohne die authentische medizinische Expertise zu ersetzen.',
    'explanation.aiDistribution.title': 'KI-geführte Verteilung',
    'explanation.aiDistribution.description': 'Bieten Sie Ihren Patienten eine vertrauenswürdige Quelle für Gesundheitsinformationen - sei es in sozialen Medien, auf Ihrer Website oder direkt auf Ihrem doc2me-Profil.',
    
    // Pricing
    'pricing.title': 'Wählen Sie Ihren Tarif',
    'pricing.subtitle': 'Wählen Sie die Option, die am besten zu Ihren Praxisanforderungen passt',
    'pricing.contactPricing': 'Kontaktieren Sie uns für Preise',
    'pricing.single.title': 'Einzelarzt',
    'pricing.single.description': 'Perfekt für selbstständige Ärzte, die ihre Online-Präsenz verbessern möchten',
    'pricing.organization.title': 'Organisation',
    'pricing.organization.description': 'Ideal für Kliniken, Krankenhäuser und Gesundheitsorganisationen mit mehreren Ärzten',
    
    // Benefits
    'benefits.title': 'Warum Gesundheitsdienstleister uns wählen',
    'benefits.subtitle': 'Unsere Plattform hilft Ihnen dabei, medizinisch präzise Inhalte zu erstellen, die Patienten ansprechen und Ihre Praxis wachsen lassen.',
    'benefits.lessQuestions.title': 'Weniger wiederholte Fragen',
    'benefits.lessQuestions.description': 'Stellen Sie vollständige Informationen vorab zur Verfügung, damit Patienten nicht dieselben Fragen wiederholt stellen müssen.',
    'benefits.boostOnline.title': 'Online-Präsenz stärken',
    'benefits.boostOnline.description': 'Erweitern Sie Ihren digitalen Fußabdruck mit Inhalten, die Patienten anziehen, die nach Gesundheitsinformationen suchen.',
    'benefits.buildTrust.title': 'Vertrauen aufbauen',
    'benefits.buildTrust.description': 'Schaffen Sie Glaubwürdigkeit und Vertrauen mit professionell erstellten, präzisen Gesundheitsinhalten.',
    
    // CTA Section
    'cta.title': 'Demo heute anfordern',
    'cta.description': 'Erleben Sie, wie unsere Plattform Ihre Patientenaufklärung und Ihr Praxiswachstum transformieren kann. Unser Team führt Sie durch unsere speziell für Gesundheitsfachkräfte entwickelte Lösung.',
    'cta.point1': 'Personalisierte Demonstration, zugeschnitten auf Ihre Praxisanforderungen',
    'cta.point2': 'Lernen Sie, wie Sie medizinische Inhalte erstellen, die Patienten ansprechen',
    'cta.point3': 'Entdecken Sie Tools zur Stärkung Ihrer Online-Präsenz und des Patientenvertrauens',
    'cta.point4': 'Keine Verpflichtung erforderlich - sehen Sie den Wert, bevor Sie sich entscheiden',
    
    // Footer
    'footer.tagline': 'Eine bessere Arzt-Patienten-Beziehung',
    'footer.company': 'Unternehmen',
    'footer.product': 'Produkt',
    'footer.copyright': 'Alle Rechte vorbehalten.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
