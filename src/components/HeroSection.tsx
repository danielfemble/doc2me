
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Changed from flex-row to flex-col layout to stack elements vertically */}
        <div className="flex flex-col gap-8 items-center">
          {/* Centered text content with increased width */}
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
          
          {/* PlatformVisual now appears below the text with full width */}
          <div className="w-full mt-8">
            <PlatformVisual />
          </div>
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
