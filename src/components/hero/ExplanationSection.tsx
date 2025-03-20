
import React from "react";
import { Stethoscope, BrainCircuit, Megaphone } from "lucide-react";

const ExplanationSection = () => {
  return (
    <div className="mt-16 md:mt-24 bg-gradient-to-r from-white/80 to-doc-blue-light/20 rounded-2xl p-6 md:p-8 neo-glass backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-doc-black">
        Physicians Creating Impactful Patient Education
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Physician-Led Content</h4>
          <p className="text-doc-gray">
            Medical professionals create short, informative videos explaining conditions and treatments in their own words and style.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI Enhances Doctors' Videos</h4>
          <p className="text-doc-gray">
            Our AI technology polishes doctor-created content, ensuring quality without replacing the authentic medical expertise.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white">
            <Megaphone className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">Share Publicly or Exclusively</h4>
          <p className="text-doc-gray">
            Physicians control who sees their content—make educational materials available to everyone or exclusively to patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
