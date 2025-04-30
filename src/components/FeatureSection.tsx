
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="feature-card opacity-0 animate-fade-in">
    <div className="feature-icon">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
            Enhance your practice with Doc<span className="text-doc-blue">2</span>Me
          </h2>
          <p className="text-lg text-doc-gray max-w-3xl mx-auto">
            Elevate your patient education with our AI-powered platform designed specifically for healthcare professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <FeatureCard 
            icon={<Clock className="w-8 h-8 text-doc-blue" />}
            title="Less Repetitive Questions"
            description="Save time with pre-recorded explanations for common questions and conditions, available to patients 24/7."
          />
          
          <FeatureCard 
            icon={<HeartPulse className="w-8 h-8 text-doc-purple" />}
            title="Better Patient Relationships"
            description="Build stronger connections by providing personalized education that shows you care beyond the appointment."
          />
          
          <FeatureCard 
            icon={<ShieldCheck className="w-8 h-8 text-doc-blue-dark" />}
            title="More Visibility for New Patients"
            description="Expand your reach with educational content that establishes your authority and attracts new patients."
          />
          
          <FeatureCard 
            icon={<BrainCircuit className="w-8 h-8 text-doc-purple-dark" />}
            title="Counter Misinformation"
            description="Combat health misinformation by giving patients reliable information from a trustworthy source - you."
          />
          
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-doc-blue-light" />}
            title="Instant Delivery"
            description="Share content immediately when patients need it most, rather than waiting for follow-ups."
          />
          
          <FeatureCard 
            icon={<Medal className="w-8 h-8 text-doc-gold" />}
            title="Build Patient Trust"
            description="Become your patients' trusted health advisor through consistent, high-quality education."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
