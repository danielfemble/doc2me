
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-32 md:pt-40 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="space-y-8 md:space-y-10">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <PlatformVisual />
          </div>
        </div>
        
        {/* Added explanation section below the header */}
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
