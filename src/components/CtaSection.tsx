
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupDialog from "@/components/SignupDialog";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-doc-blue to-doc-blue-dark opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_70%)] -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center">
              More than a one-time visit – Keep patients engaged beyond the appointment.
            </h2>
            <p className="text-white/80 text-lg mb-8 text-center">
              Turn patients into fans with personalized educational content that builds loyalty and improves outcomes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Doctor-Driven Content</h3>
                  <p className="text-white/70">No generic videos or brochures - content created by you, for your patients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Effortless Creation</h3>
                  <p className="text-white/70">AI handles editing, captions, and optimization so you can focus on the message.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Instant Delivery</h3>
                  <p className="text-white/70">Share immediately with patients who need information now, not later.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <SignupDialog 
                trigger={
                  <Button className="bg-white text-doc-blue hover:bg-white/90 group gap-2 h-12 px-6" size="lg">
                    Request Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
