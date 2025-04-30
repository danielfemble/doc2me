
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupDialog from "@/components/SignupDialog";

interface HeadlineSectionProps {
  className?: string;
}

const HeadlineSection = ({ className = "" }: HeadlineSectionProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="inline-flex items-center rounded-full py-1.5 px-4 bg-gradient-to-r from-doc-blue-light/40 to-doc-purple-light/40 border border-doc-blue-light/20 shadow-soft mx-auto">
        <span className="text-sm text-doc-black font-medium">Co-Pilot for Patient Education</span>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <div className="bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent pb-1">
            A new generation of
          </div>
          <div className="relative mt-2">
            <span className="animated-gradient-text font-extrabold whitespace-nowrap">
              patient engagement
            </span>
          </div>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-doc-gray/90">
          Without Scaling Your Workload
        </h2>
      </div>
      
      <p className="text-lg md:text-xl text-doc-gray leading-relaxed max-w-2xl mx-auto">
        We're combating medical misinformation by extending the power of doctors beyond the clinic. Create, personalize, and share accurate health information with your patients in minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
        <SignupDialog 
          trigger={
            <Button className="bg-gradient-to-r from-doc-blue to-doc-purple text-white group gap-2 text-base h-12 px-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5" size="lg">
              Join Waitlist
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default HeadlineSection;
