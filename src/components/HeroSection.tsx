
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import ExplanationSection from "./hero/ExplanationSection";

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
      </div>

      {/* Full-width image with improved gradient fadeout - showing full left side */}
      <div className="relative w-full overflow-hidden mt-2">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        <img 
          src="/lovable-uploads/1359422e-e862-4a96-b9f6-d58cc301a3cc.png" 
          alt="Doc2Me Platform Interface" 
          className="w-full object-cover h-[650px] md:h-[750px] lg:h-[850px]"
        />
      </div>
      
      {/* Explanation section positioned lower to give more space to the image */}
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 -mt-24 md:-mt-36 lg:-mt-48">
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
