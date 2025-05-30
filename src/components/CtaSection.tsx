
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative z-10 bg-gradient-to-b from-white/90 via-doc-blue/5 to-doc-purple/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-doc-blue/20 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-doc-blue/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-doc-purple/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left side: Text content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark bg-clip-text text-transparent">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-doc-gray mb-8">
                {t('cta.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">{t('cta.point1')}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">{t('cta.point2')}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">{t('cta.point3')}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">{t('cta.point4')}</p>
                </div>
              </div>
            </div>
            
            {/* Right side: Embedded form with adjusted height */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-50 blur-sm animate-pulse-slow"></div>
              <div className="relative bg-white rounded-md p-1">
                <iframe 
                  width="540" 
                  height="580" 
                  src="https://sibforms.com/serve/MUIFALphWNuzT13Q_GfS7GYo0_AJQ2S_64P9K7fRNYNSd9U_LVMQ_O-Gje5URQdOkmhbc3YNNdepU_I_jrhqUxQdg9T98sL9RNh-r3BGWoN0remP5-WTx8kwrF5zt1K1hbI15tzFCUDR_uZC9zL7dhZn9MZ5OkWD7EQ9d11AEHYWIiyf64un4-5xR17xYU8X2bA7bA7CSBcgZHBG" 
                  frameBorder="0" 
                  scrolling="auto" 
                  allowFullScreen 
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                  className="rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
