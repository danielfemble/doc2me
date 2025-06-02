import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Video, Sparkles, Share2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);

  const handleGetStarted = () => {
    window.open('https://studio.doc2me.co/auth/signup', '_blank');
  };

  useEffect(() => {
    // Observer for step cards
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const steps = document.querySelectorAll('.step-card');
    steps.forEach(step => {
      observerRef.current?.observe(step);
    });

    // Observer for section cards with stacking effect
    sectionObserverRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Calculate the starting position (further back for each card)
          const index = parseInt(entry.target.getAttribute('data-index') || '0');

          // Reset the card to its initial state before animating it
          entry.target.classList.remove('translate-y-0');
          entry.target.classList.remove('opacity-100');
          entry.target.classList.remove('scale-100');

          // Apply a staggered delay based on index
          setTimeout(() => {
            entry.target.classList.remove('translate-y-24');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('scale-95');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('scale-100');
          }, index * 150); // 150ms delay between each card animation

          // Only unobserve once the animation is complete
          setTimeout(() => {
            sectionObserverRef.current?.unobserve(entry.target);
          }, 1000);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "-50px"
    });

    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach((card, index) => {
      // Set initial position (translated down and slightly smaller)
      card.classList.add('translate-y-24', 'opacity-0', 'scale-95');
      // Add data-index attribute for animation sequence
      card.setAttribute('data-index', index.toString());
      // Add transition for smooth animation
      (card as HTMLElement).style.transition = 'transform 0.7s ease-out, opacity 0.7s ease-out, scale 0.7s ease-out';
      // Apply a subtle offset for 3D-like effect
      (card as HTMLElement).style.transformStyle = 'preserve-3d';
      // Observe the card
      sectionObserverRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        steps.forEach(step => {
          observerRef.current?.unobserve(step);
        });
      }
      if (sectionObserverRef.current) {
        sectionCards.forEach(card => {
          sectionObserverRef.current?.unobserve(card);
        });
      }
    };
  }, []);

  return <section id="how-it-works" className="bg-gradient-to-b from-white/90 via-doc-blue-light/20 to-doc-blue-light/30 py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-doc-blue-light/40 px-4 py-1.5 rounded-full text-doc-blue-dark text-sm font-medium mb-4">
            <span>Empowering Healthcare Providers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
            Create, Enhance, and Distribute – All in One Place
          </h2>
          <p className="text-doc-gray text-lg">
            Doc2Me is designed to make you a recognized thought leader in your field, helping you connect with your patients while saving time and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative mb-16">
          {/* Line removed by user */}
          
          <div className="step-card opacity-0 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Video className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">Create</h3>
            <p className="text-doc-gray mb-6">
              Create professional, educational content with our AI-guided process. No need for a marketing team or extensive equipment.
            </p>
          </div>

          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-200">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Sparkles className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">Enhance</h3>
            <p className="text-doc-gray mb-6">
              Our AI automatically enhances your videos with captions, visual aids, and scientifically accurate information from trusted sources.
            </p>
          </div>

          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-400">
            <div className="w-20 h-20 bg-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10">
              <Share2 className="w-8 h-8" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-sm border border-gray-100">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-doc-black">Distribute</h3>
            <p className="text-doc-gray mb-6">
              Share your content across multiple platforms, create exclusive patient access, and track performance with integrated analytics.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button 
            variant="gradient" 
            className="gap-2 text-base h-12" 
            size="lg"
            onClick={handleGetStarted}
          >
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>;
};

export default HowItWorks;
