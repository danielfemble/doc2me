
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeadlineSectionProps {
  className?: string;
}

const HeadlineSection = ({ className = "" }: HeadlineSectionProps) => {
  return (
    <div className={`space-y-6 md:space-y-8 max-w-2xl lg:max-w-xl ${className}`}>
      <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon">
        <span className="text-sm text-doc-black font-medium">For Clinics & Doctors</span>
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
        <span className="block bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent">
          Patient education
        </span>
        <span className="block bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent">
          meets
        </span>
        <span className="relative">
          <span className="bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark animate-pulse-slow bg-clip-text text-transparent">
            marketing.
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-full"></span>
        </span>
      </h1>
      
      <p className="text-base md:text-xl text-doc-gray leading-relaxed">
        We're on a mission to extend the power of doctors beyond the clinic—with content that lasts. Create, personalize, and share short-form videos with your patients in minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="btn-primary group gap-2 text-base h-12" size="lg">
          Try Doc2Me
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default HeadlineSection;
