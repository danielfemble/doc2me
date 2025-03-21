
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
        {/* Centered headline for impact */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <HeadlineSection className="px-4" />
          <TestimonialBadge className="justify-center mt-6 md:mt-8" />
        </div>
        
        {/* Larger full-width visual with increased vertical space */}
        <div className={`mt-6 md:mt-12 px-0 sm:px-0 pt-8 md:pt-10 pb-60 md:pb-40`}> 
          {/* Extra padding at bottom to accommodate the overlay cards */}
          <PlatformVisual className="max-w-[100%] mx-auto" />
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
