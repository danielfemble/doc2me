
import HeadlineSection from "./hero/HeadlineSection";
import TestimonialBadge from "./hero/TestimonialBadge";
import PlatformVisual from "./hero/PlatformVisual";
import ExplanationSection from "./hero/ExplanationSection";

const HeroSection = () => {
  return (
    <div className="relative pt-28 md:pt-36 pb-12 md:pb-16 z-10">
      {/* Full-width background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
        <img 
          src="/lovable-uploads/1359422e-e862-4a96-b9f6-d58cc301a3cc.png" 
          alt="Doc2Me Platform Interface" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-3/5 space-y-8 backdrop-blur-sm p-6 rounded-2xl bg-white/50">
            <HeadlineSection />
            <TestimonialBadge />
          </div>
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0 hidden lg:block">
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
