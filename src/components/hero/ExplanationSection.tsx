
import React from "react";
import { Stethoscope, BrainCircuit, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExplanationSection = () => {
  return (
    <div className="mt-16 md:mt-24 rounded-2xl p-6 md:p-8 neo-glass backdrop-blur-sm bg-gradient-to-r from-white/90 to-doc-blue-light/10 border border-white/40 shadow-neon">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-doc-black">
        Educational Videos as Your Strongest Referral &amp; Marketing Channel
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-neon transition-all duration-300">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white shadow-lg">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-doc-black text-lg">Physician-Led Content</h4>
            <p className="text-doc-gray">
              Medical professionals create short, informative videos explaining conditions and treatments in their own words and style.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-neon transition-all duration-300">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white shadow-lg">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-doc-black text-lg">AI Enhances Doctors' Videos</h4>
            <p className="text-doc-gray">
              Our AI technology polishes doctor-created content, ensuring quality without replacing the authentic medical expertise.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-neon transition-all duration-300">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-doc-black text-lg">Combat Misinformation</h4>
            <p className="text-doc-gray">
              Give your patients a trusted source of health information, reducing their reliance on potentially misleading social media content.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExplanationSection;
