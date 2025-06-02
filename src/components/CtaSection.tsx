import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const CtaSection = () => {
  const handleGetStarted = () => {
    window.open('https://studio.doc2me.co/auth/signup', '_blank');
  };
  return <section className="py-20 md:py-28 relative z-10 bg-gradient-to-b from-white/90 via-doc-blue/5 to-doc-purple/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-doc-blue/20 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-doc-blue/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-doc-purple/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="flex justify-center relative z-10">
            {/* Centered content */}
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark bg-clip-text text-transparent">
                Get Started Today
              </h2>
              <p className="text-lg text-doc-gray mb-8">Transform your patient education and practice growth.  
Discover the power of Doc2Me where Patient Education meets Online Marketing. </p>
              
              

              <Button variant="gradient" className="gap-2 text-base h-12" size="lg" onClick={handleGetStarted}>
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;