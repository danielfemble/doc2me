
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered headline for impact */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <HeadlineSection className="px-4" />
          <TestimonialBadge className="justify-center mt-8" />
        </div>
        
        {/* Larger full-width visual with reduced padding to maximize size */}
        <div className="mt-8 md:mt-12 px-0 sm:px-0 pt-10 pb-12">
          <PlatformVisual className="max-w-6xl mx-auto" />
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
