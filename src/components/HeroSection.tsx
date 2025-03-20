
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import ExplanationSection from "./hero/ExplanationSection";
import PlatformVisual from "./hero/PlatformVisual";

const HeroSection = () => {
  return (
    <div className="relative pt-10 md:pt-16 pb-0 z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Headline at the top */}
        <div className="mb-8">
          <HeadlineSection />
          <div className="mt-6">
            <TestimonialBadge />
          </div>
        </div>
        
        {/* Platform visual with overlays */}
        <PlatformVisual />
      </div>
      
      {/* Explanation section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 mt-16">
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
