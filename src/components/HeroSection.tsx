
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="relative pt-28 md:pt-36 pb-12 md:pb-16 z-10 bg-gradient-to-br from-doc-black to-gray-900 text-white">
      {/* Remove the background image and use a solid dark gradient instead */}
      <div className="absolute inset-0 w-full h-full z-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <HeadlineSection className="text-white" />
            <TestimonialBadge />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <PlatformVisual />
          </div>
        </div>
        
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
