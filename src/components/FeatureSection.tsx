
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => (
  <div 
    className={`feature-card opacity-0 p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="feature-icon mb-4 text-doc-purple">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Save Time",
      description: "Create accurate patient education materials in minutes instead of hours."
    },
    {
      icon: <Zap size={24} />,
      title: "Boost Online Presence",
      description: "Increase your visibility with personalized health content that ranks on search engines."
    },
    {
      icon: <Medal size={24} />,
      title: "Build Authority",
      description: "Establish yourself as a trusted expert in your field with high-quality health information."
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Better Patient Outcomes",
      description: "Improve adherence and results with easy-to-understand health education materials."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "AI-Powered Content",
      description: "Leverage advanced AI to create medically accurate and personalized patient materials."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Medically Verified",
      description: "All content is medically accurate and follows best practices in health communication."
    }
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-doc-purple-light/40 px-4 py-1.5 rounded-full text-doc-purple text-sm font-medium mb-4">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Health Providers Choose Us</h2>
          <p className="text-lg text-doc-gray max-w-2xl mx-auto">
            Our platform helps you create medically accurate content that connects with patients
            and grows your practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
