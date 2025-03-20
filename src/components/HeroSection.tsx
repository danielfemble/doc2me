
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 max-w-2xl lg:max-w-xl">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
          <PlatformVisual />
        </div>
        
        {/* Added explanation section below the header */}
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
