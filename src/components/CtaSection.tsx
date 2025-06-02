import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const handleGetStarted = () => {
    window.open('https://studio.doc2me.co/auth/signup', '_blank');
  };

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
                Get Started Today
              </h2>
              <p className="text-lg text-doc-gray mb-8">
                Transform your patient education and practice growth. Join our platform designed specifically for healthcare professionals and start creating content that connects with patients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Access AI-powered content creation tools</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Create medical content that connects with patients</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Boost your online presence and patient trust</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-doc-purple shrink-0 mt-1" size={20} />
                  <p className="text-doc-gray">Start building your thought leadership today</p>
                </div>
              </div>

              <Button 
                variant="gradient" 
                className="gap-2 text-base h-12" 
                size="lg"
                onClick={handleGetStarted}
              >
                Get Started Now
              </Button>
            </div>
            
            {/* Right side: Visual placeholder */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-50 blur-sm animate-pulse-slow"></div>
              <div className="relative bg-white rounded-md p-8 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-doc-blue/10 to-doc-purple/10 rounded-lg flex items-center justify-center">
                  <div className="text-doc-gray">
                    <h3 className="text-xl font-semibold mb-2">Ready to Start?</h3>
                    <p>Click "Get Started" to begin your journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
