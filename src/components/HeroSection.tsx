
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="pt-16 sm:pt-28 pb-12 relative z-10">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Centered headline for impact */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <HeadlineSection className="px-4" />
          <TestimonialBadge className="justify-center mt-6" />
        </div>
        
        {/* Larger full-width visual with increased vertical space */}
        <div className={`mt-6 px-0 pt-16 ${isMobile ? 'pb-60' : 'pb-32'}`}> 
          <PlatformVisual className="max-w-[100%] mx-auto" />
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
