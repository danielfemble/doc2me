
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Split screen design with visual on left, text on right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* PlatformVisual on left side for desktop */}
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <PlatformVisual />
          </div>
          
          {/* Text content on right side */}
          <div className="w-full md:w-2/5 space-y-8 order-1 md:order-2">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
