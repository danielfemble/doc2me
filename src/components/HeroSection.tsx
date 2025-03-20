
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-3/5 space-y-8">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <PlatformVisual />
          </div>
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
