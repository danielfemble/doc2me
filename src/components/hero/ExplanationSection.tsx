
import React from "react";
import { Video, Sparkles, Users } from "lucide-react";

const ExplanationSection = () => {
  return (
    <div className="mt-16 md:mt-24 bg-gradient-to-r from-white/80 to-doc-blue-light/20 rounded-2xl p-6 md:p-8 neo-glass backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-doc-black">
        How Doc2Me Transforms Patient Education
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white">
            <Video className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Record Short Videos</h4>
          <p className="text-doc-gray">
            Doctors record brief, personalized explanations for common conditions and treatments directly from their device.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI Enhancement</h4>
          <p className="text-doc-gray">
            Our AI automatically enhances video quality, adds captions, removes filler words, and optimizes content for patient engagement.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white">
            <Users className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Personalized Sharing</h4>
          <p className="text-doc-gray">
            Share these enhanced educational videos with patients instantly, extending your expertise beyond clinic walls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
