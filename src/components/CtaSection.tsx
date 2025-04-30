
import { CheckCircle } from "lucide-react";
import { SignupDialog } from "@/components/index";

const CtaSection = () => {
  return (
    <section className="py-16 relative z-10 bg-gradient-to-b from-white/90 via-doc-blue/5 to-doc-purple/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-doc-blue/20 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-doc-blue/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-doc-purple/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left side: Text content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark bg-clip-text text-transparent">
                Request Demo Today
              </h2>
              <p className="text-lg text-doc-gray mb-8">
                Experience how our platform can transform your patient education and practice growth. Our team will walk you through our solution designed specifically for healthcare professionals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Personalized demonstration tailored to your practice needs</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Learn how to create medical content that connects with patients</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Discover tools to boost your online presence and patient trust</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">No commitment required - see the value before you decide</p>
                </div>
              </div>
            </div>
            
            {/* Right side: Embedded form with adjusted height */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-50 blur-sm animate-pulse-slow"></div>
              <div className="relative bg-white rounded-md p-1">
                <iframe 
                  width="100%" 
                  height="550" 
                  src="https://sibforms.com/serve/MUIFAGpsJ0RSg2mumVscA7Sdr6Pfr0ZzTlZowr6iZ6uY73n032zRzrkFEj2DdjZOx2_VlCks8Af7pDmQI5-si6LJBt5hx6kbyH8q9BapzcamZNnuTPHuVsY447w4gMEcvZakIBc5ss7LtRFBlM6c7STy0AQ2cPoh_UVJQOp5l0YbzBmWfh9kY1Nmb-pReIl3qY4ekOF8SOUzGF1k" 
                  frameBorder="0" 
                  scrolling="auto" 
                  allowFullScreen 
                  style={{ display: 'block', maxWidth: '100%' }}
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
