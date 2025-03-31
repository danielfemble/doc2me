
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Sparkles, Share2, ArrowRight } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";

const HowItWorks = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const steps = document.querySelectorAll('.step-card');
    steps.forEach(step => {
      observerRef.current?.observe(step);
    });

    return () => {
      if (observerRef.current) {
        steps.forEach(step => {
          observerRef.current?.unobserve(step);
        });
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-doc-blue-light/20 py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-doc-blue-light/40 px-4 py-1.5 rounded-full text-doc-blue-dark text-sm font-medium mb-4">
            <span>Three Simple Steps</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
            How Doc2Me Works
          </h2>
          <p className="text-doc-gray text-lg">
            No more effort – AI streamlines content creation, from start to finish. Simply record, and AI takes care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-doc-blue-light/60 -z-10 transform -translate-y-1/2"></div>
          
          <div className="step-card opacity-0 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Camera className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">AI Powered Content Session</h3>
            <p className="text-doc-gray mb-6">
              Doc2me AI asks you questions patients want to learn the most about, you simply answer them via quick video on any device.
            </p>
          </div>

          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-200">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Sparkles className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">AI Enhancement</h3>
            <p className="text-doc-gray mb-6">
              Our AI automatically enhances quality, adds captions, removes filler words, and optimizes for engagement.
            </p>
          </div>

          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-400">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Share2 className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">Share</h3>
            <p className="text-doc-gray mb-6">
              Decide what to share so that new patients can discover you and what's exclusive to existing patients.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <SignupDialog 
            trigger={
              <Button className="btn-primary gap-2 text-base h-12" size="lg">
                Join Waitlist
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
