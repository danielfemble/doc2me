
import React from "react";
import { UserPlus, Sparkles, Users } from "lucide-react";

const ExplanationSection = () => {
  return (
    <div className="mt-16 md:mt-24 bg-gradient-to-r from-white/80 to-doc-blue-light/20 rounded-2xl p-6 md:p-8 neo-glass backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-doc-black">
        How Doctors Create Powerful Patient Education with Doc2Me
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white">
            <UserPlus className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Doctors as Content Creators</h4>
          <p className="text-doc-gray">
            Healthcare providers record brief, personalized explanations for their patients directly from their device—no technical expertise required.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI-Enhanced Doctor Videos</h4>
          <p className="text-doc-gray">
            Our AI amplifies doctors' expertise by enhancing video quality, adding captions, removing filler words, and optimizing for patient engagement.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white">
            <Users className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Extend Your Medical Expertise</h4>
          <p className="text-doc-gray">
            Physicians share their enhanced educational videos with patients instantly, extending their expertise beyond clinic walls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
