
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeadlineSectionProps {
  className?: string;
}

const HeadlineSection = ({ className = "" }: HeadlineSectionProps) => {
  return (
    <div className={`space-y-8 md:space-y-10 max-w-3xl ${className}`}>
      <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon">
        <span className="text-sm text-doc-black font-medium">For Clinics & Doctors</span>
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight">
          <span className="block bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent">
            Patient education
          </span>
          <span className="block bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent">
            meets
          </span>
          <div className="relative mt-2">
            <span className="bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark animate-pulse-slow bg-clip-text text-transparent">
              health care marketing.
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-full"></span>
          </div>
        </h1>
      </div>
      
      <p className="text-lg md:text-xl lg:text-2xl text-doc-gray leading-relaxed max-w-2xl">
        We're on a mission to extend the power of doctors beyond the clinic—with content that lasts. Create, personalize, and share short-form videos with your patients in minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button className="btn-primary group gap-2 text-base h-14 px-8" size="lg">
          Try Doc2Me
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default HeadlineSection;
