
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="feature-card opacity-0 animate-fade-in p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
    <div className="feature-icon mb-4 text-doc-purple">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>
);

const FeatureSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Clock size={24} />,
      title: t('features.saveTime.title'),
      description: t('features.saveTime.description')
    },
    {
      icon: <Zap size={24} />,
      title: t('features.boostPresence.title'),
      description: t('features.boostPresence.description')
    },
    {
      icon: <Medal size={24} />,
      title: t('features.buildAuthority.title'),
      description: t('features.buildAuthority.description')
    },
    {
      icon: <HeartPulse size={24} />,
      title: t('features.betterOutcomes.title'),
      description: t('features.betterOutcomes.description')
    },
    {
      icon: <BrainCircuit size={24} />,
      title: t('features.aiPowered.title'),
      description: t('features.aiPowered.description')
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t('features.medicallyVerified.title'),
      description: t('features.medicallyVerified.description')
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('features.title')}</h2>
          <p className="text-lg text-doc-gray max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
