
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupDialog from "@/components/SignupDialog";

interface HeadlineSectionProps {
  className?: string;
}

const HeadlineSection = ({ className = "" }: HeadlineSectionProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon bg-gray-800/50 border border-gray-700">
        <span className="text-sm text-white font-medium">For Clinics & Doctors</span>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <div className="text-white">
            Patient education meets
          </div>
          <div className="relative mt-2">
            <span className="animated-gradient-text font-extrabold">
              healthcare marketing.
            </span>
          </div>
        </h1>
      </div>
      
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
        We're combating medical misinformation by extending the power of doctors beyond the clinic. Create, personalize, and share accurate health information with your patients in minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <SignupDialog 
          trigger={
            <Button className="bg-gradient-to-r from-[#0271e5] to-[#0258B6] group gap-2 text-base h-12 px-6 hover:shadow-glow" size="lg">
              Try Doc2Me
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default HeadlineSection;
