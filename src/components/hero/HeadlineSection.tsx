
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupDialog from "@/components/SignupDialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeadlineSectionProps {
  className?: string;
}

const HeadlineSection = ({
  className = ""
}: HeadlineSectionProps) => {
  const { t } = useLanguage();

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon mx-auto">
        <span className="text-sm text-doc-black font-medium">{t('hero.badge')}</span>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          <div className="bg-gradient-to-r from-doc-black to-doc-gray/90 bg-clip-text text-transparent pb-1">
            {t('hero.headline')} <span className="animated-gradient-text">visible</span>
          </div>
        </h1>
      </div>
      
      <p className="text-lg text-doc-gray leading-relaxed max-w-2xl mx-auto">{t('hero.description')}</p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
        <SignupDialog trigger={
          <Button variant="default" className="bg-doc-blue hover:bg-doc-blue-dark group gap-2 text-base h-12 px-6 text-white" size="lg">
            {t('hero.requestDemo')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        } />
      </div>
    </div>
  );
};

export default HeadlineSection;
