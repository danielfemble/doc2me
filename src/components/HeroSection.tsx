
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

      {/* Full-width image with gradient fadeout - now larger and higher up */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
        <img 
          src="/lovable-uploads/1359422e-e862-4a96-b9f6-d58cc301a3cc.png" 
          alt="Doc2Me Platform Interface" 
          className="w-full object-cover h-[600px] md:h-[700px] lg:h-[800px]"
        />
      </div>
      
      {/* Explanation section positioned further down to accommodate larger image */}
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 -mt-32 md:-mt-48 lg:-mt-64">
        <ExplanationSection />
      </div>
    </div>
  );
};

export default HeroSection;
