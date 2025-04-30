
import React from "react";
import { Stethoscope, BrainCircuit, ShieldCheck } from "lucide-react";
const ExplanationSection = () => {
  return <div className="mt-16 sm:mt-24 bg-gradient-to-r from-white/80 to-doc-blue-light/20 rounded-2xl p-6 sm:p-8 neo-glass backdrop-blur-sm">
      <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-doc-black">Scale your online presence without scaling your workload</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI Guidance in Creation</h4>
          <p className="text-doc-gray">Create short, informative videos explaining conditions and treatments in your own words and style. Get guidance by our AI.</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI Enhancement after Creating</h4>
          <p className="text-doc-gray">Our AI technology polishes your doctor-led content, ensuring quality without replacing the authentic medical expertise.</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">AI Guidance in Distribution</h4>
          <p className="text-doc-gray">Provide your patients a trusted source of health information - be it on your socials, website or directly on your doc2me profile.</p>
        </div>
      </div>
    </div>;
};
export default ExplanationSection;
