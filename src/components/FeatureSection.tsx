import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck } from "lucide-react";
const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="feature-card opacity-0 animate-fade-in">
    <div className="feature-icon">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>;
const FeatureSection = () => {
  return;
};
export default FeatureSection;