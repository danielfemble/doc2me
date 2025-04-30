
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="pt-16 sm:pt-24 lg:pt-36 pb-12 lg:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        {/* Centered headline for impact */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-12">
          <HeadlineSection className="px-4" />
          <TestimonialBadge className="justify-center mt-6 lg:mt-8" />
        </div>
        
        {/* Larger full-width visual with increased vertical space */}
        <div className={`mt-6 sm:mt-8 lg:mt-12 px-0 pt-16 sm:pt-20 ${isMobile ? 'pb-60' : 'pb-32'}`}> 
          <PlatformVisual className="max-w-[100%] mx-auto" />
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
