
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck, MessageSquare, Globe, Star } from "lucide-react";
const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="feature-card opacity-0 animate-fade-in p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
    <div className="feature-icon mb-4 text-doc-purple">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>;
const FeatureSection = () => {
  const features = [{
    icon: <Clock size={24} />,
    title: "Save Time",
    description: "Create accurate patient education materials in minutes instead of hours."
  }, {
    icon: <Zap size={24} />,
    title: "Boost Online Presence",
    description: "Increase your visibility with personalized health content that ranks on search engines."
  }, {
    icon: <Medal size={24} />,
    title: "Build Authority",
    description: "Establish yourself as a trusted expert in your field with high-quality health information."
  }, {
    icon: <HeartPulse size={24} />,
    title: "Better Patient Outcomes",
    description: "Improve adherence and results with easy-to-understand health education materials."
  }, {
    icon: <BrainCircuit size={24} />,
    title: "AI-Powered Content",
    description: "Leverage advanced AI to create medically accurate and personalized patient materials."
  }, {
    icon: <ShieldCheck size={24} />,
    title: "Medically Verified",
    description: "All content is medically accurate and follows best practices in health communication."
  }];
  
  const benefitCards = [
    {
      icon: <MessageSquare size={24} />,
      title: "Less Repetitive Questions",
      description: "Provide complete information upfront so patients don't need to ask the same questions repeatedly."
    },
    {
      icon: <Globe size={24} />,
      title: "Boost Online Presence",
      description: "Grow your digital footprint with content that attracts patients searching for health information."
    },
    {
      icon: <Star size={24} />,
      title: "Build Trust",
      description: "Establish credibility and trust with professionally crafted, accurate health content."
    }
  ];
  
  return <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Health Providers Choose Us</h2>
          <p className="text-lg text-doc-gray max-w-2xl mx-auto">
            Our platform helps you create medically accurate content that connects with patients
            and grows your practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefitCards.map((card, index) => (
            <div key={index} className="benefit-card p-6 rounded-xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-doc-blue/10">
              <div className="benefit-icon mb-4 text-white bg-gradient-to-r from-doc-blue to-doc-purple rounded-full p-3 inline-flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-doc-black">{card.title}</h3>
              <p className="text-doc-gray">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default FeatureSection;
