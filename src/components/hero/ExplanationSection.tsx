
import React from "react";
import { BookOpen, BrainCircuit, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExplanationSection = () => {
  const { t } = useLanguage();

  return (
    <div id="features" className="mt-16 sm:mt-24 bg-gradient-to-r from-white/80 to-doc-blue-light/20 rounded-2xl p-6 sm:p-8 neo-glass backdrop-blur-sm my-0">
      <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-doc-black">{t('explanation.title')}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue to-doc-purple flex items-center justify-center text-white">
            <BookOpen className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">{t('explanation.aiGuided.title')}</h4>
          <p className="text-doc-gray">{t('explanation.aiGuided.description')}</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-purple to-doc-blue-dark flex items-center justify-center text-white">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">{t('explanation.aiEnhancement.title')}</h4>
          <p className="text-doc-gray">{t('explanation.aiEnhancement.description')}</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-doc-blue-dark to-doc-blue flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-doc-black">{t('explanation.aiDistribution.title')}</h4>
          <p className="text-doc-gray">{t('explanation.aiDistribution.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
