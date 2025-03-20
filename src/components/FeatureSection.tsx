
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, Layers } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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
    <section id="features" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#0271e5]/10 px-4 py-1.5 rounded-full text-[#0271e5] text-sm font-medium mb-4">
          <span>Why Choose Doc2Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
          More than education – Save time, strengthen trust, improve outcomes.
        </h2>
        <p className="text-doc-gray text-lg">
          Traditional patient education is time-consuming and ineffective. Doc2Me changes that with AI-powered automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Clock className="w-6 h-6" />}
          title="Time-Saving Efficiency"
          description="Create and share content in minutes, not hours. AI handles editing and production so you can focus on what matters."
        />
        <FeatureCard 
          icon={<HeartPulse className="w-6 h-6" />}
          title="Better Patient Outcomes"
          description="Patients retain more information through personalized video content, leading to improved adherence and outcomes."
        />
        <FeatureCard 
          icon={<BrainCircuit className="w-6 h-6" />}
          title="AI-Powered Automation"
          description="Record once, and AI handles the rest—enhancing quality, adding captions, and optimizing for engagement."
        />
        <FeatureCard 
          icon={<Medal className="w-6 h-6" />}
          title="Build Patient Trust"
          description="Extend your expertise beyond clinic walls, creating lasting connections with patients who feel supported."
        />
        <FeatureCard 
          icon={<Layers className="w-6 h-6" />}
          title="Personalized Content"
          description="Tailor educational content to specific patient needs, conditions, and questions for more relevant care."
        />
        <FeatureCard 
          icon={<Zap className="w-6 h-6" />}
          title="Instant Delivery"
          description="Share content immediately with patients via secure links, with automated notifications for new videos and viewing reminders."
        />
      </div>
    </section>
  );
};

export default FeatureSection;
