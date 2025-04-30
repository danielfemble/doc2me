
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="pt-24 md:pt-36 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Background decorative elements */}
        <div className="absolute -z-10 top-20 left-0 w-60 h-60 rounded-full bg-doc-purple/10 blur-3xl"></div>
        <div className="absolute -z-10 top-40 right-10 w-80 h-80 rounded-full bg-doc-blue/10 blur-3xl"></div>
        
        {/* Centered headline for impact */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <HeadlineSection className="px-4" />
          <TestimonialBadge className="justify-center mt-6 md:mt-8" />
        </div>
        
        {/* Larger full-width visual with increased vertical space */}
        <div className={`mt-6 md:mt-12 px-0 sm:px-0 pt-20 md:pt-10 ${isMobile ? 'pb-60' : 'pb-32'} relative`}> 
          <div className="absolute -z-10 -top-20 left-1/4 w-72 h-72 rounded-full bg-doc-blue-light/20 mix-blend-multiply blur-3xl"></div>
          <div className="absolute -z-10 top-40 right-1/3 w-64 h-64 rounded-full bg-doc-purple-light/20 mix-blend-multiply blur-3xl"></div>
          
          <PlatformVisual className="max-w-[100%] mx-auto relative z-10" />
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
