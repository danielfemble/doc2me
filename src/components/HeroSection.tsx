
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="relative pt-20 md:pt-28 pb-0 z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Headline at the top */}
        <div className="mb-12">
          <HeadlineSection />
          <div className="mt-6">
            <TestimonialBadge />
          </div>
        </div>
      </div>

      {/* Full-width image with gradient fadeout */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
        <img 
          src="/lovable-uploads/1359422e-e862-4a96-b9f6-d58cc301a3cc.png" 
          alt="Doc2Me Platform Interface" 
          className="w-full object-cover h-[500px] md:h-[600px]"
        />
      </div>
      
      {/* Explanation section now positioned to overlap with the fading image */}
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 -mt-32 md:-mt-48">
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
