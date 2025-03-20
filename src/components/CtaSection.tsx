
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-doc-blue to-doc-blue-dark opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_70%)] -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              More than a one-time visit – Keep patients engaged beyond the appointment.
            </h2>
            <p className="text-white/80 text-lg mb-8">
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
            
            <Button className="bg-white text-doc-blue hover:bg-white/90 group gap-2 h-12 px-6" size="lg">
              Try Doc2Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative rounded-2xl border-8 border-white/10 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
              alt="Doctor creating content"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Message from Patient</h4>
                    <p className="text-white/70 text-xs">Just now</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  "Thank you for the video explaining my medication schedule! It's so much clearer now. My blood pressure is already improving!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
