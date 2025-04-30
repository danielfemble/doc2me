
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Video, Sparkles, Share2, ArrowRight } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);
  
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

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-doc-blue-light/20 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-doc-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-doc-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-doc-blue-light/40 px-4 py-1.5 rounded-full text-doc-blue-dark text-sm font-medium mb-4">
            <span>Empowering Healthcare Providers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
            Create, <span className="text-doc-blue">Enhance</span>, and <span className="text-doc-purple">Distribute</span> – All in One Place
          </h2>
          <p className="text-doc-gray text-lg">
            Doc2Me is designed to make you a recognized thought leader in your field, helping you connect with your patients while saving time and resources.
          </p>
        </div>

        {/* Step cards with connecting line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative mb-24">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-light -z-10 transform -translate-y-1/2"></div>
          
          {/* Step 1: Create */}
          <div className="step-card opacity-0 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-doc-blue to-doc-blue-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300">
              <Video className="w-10 h-10" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue flex items-center justify-center font-bold shadow-md border border-gray-100">
                1
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-doc-black">Create</h3>
            <p className="text-doc-gray mb-6 max-w-xs mx-auto">
              Create professional, educational content with our AI-guided process. No need for a marketing team or extensive equipment.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-doc-blue to-transparent"></div>
          </div>

          {/* Step 2: Enhance */}
          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-200">
            <div className="w-24 h-24 bg-gradient-to-br from-doc-purple to-doc-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-10 h-10" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-purple flex items-center justify-center font-bold shadow-md border border-gray-100">
                2
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-doc-black">Enhance</h3>
            <p className="text-doc-gray mb-6 max-w-xs mx-auto">
              Our AI automatically enhances your videos with captions, visual aids, and scientifically accurate information from trusted sources.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-doc-purple to-transparent"></div>
          </div>

          {/* Step 3: Distribute */}
          <div className="step-card opacity-0 flex flex-col items-center text-center animate-delay-400">
            <div className="w-24 h-24 bg-gradient-to-br from-doc-blue-light to-doc-purple rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300">
              <Share2 className="w-10 h-10" />
              <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-doc-blue-light flex items-center justify-center font-bold shadow-md border border-gray-100">
                3
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-doc-black">Distribute</h3>
            <p className="text-doc-gray mb-6 max-w-xs mx-auto">
              Share your content across multiple platforms, create exclusive patient access, and track performance with integrated analytics.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-doc-blue-light to-transparent"></div>
          </div>
        </div>

        {/* Feature cards with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="section-card glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-doc-black">Personalized Content Creation</h3>
            <p className="text-doc-gray mb-4">Our platform analyzes your specialty and practice to suggest relevant topics that your patients are searching for online.</p>
            <div className="bg-doc-blue-light/10 p-4 rounded-lg">
              <p className="text-sm text-doc-black/80 italic">"Doc2Me helped me create content that speaks directly to my patients' concerns, increasing engagement by 300%."</p>
            </div>
          </div>
          
          <div className="section-card glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-doc-black">AI-Powered Enhancement</h3>
            <p className="text-doc-gray mb-4">Our algorithms improve your content with visual aids, citations, and patient-friendly language that maintains medical accuracy.</p>
            <div className="bg-doc-purple-light/10 p-4 rounded-lg">
              <p className="text-sm text-doc-black/80 italic">"The AI enhancement feature saved me hours of editing time while making my content more professional and engaging."</p>
            </div>
          </div>
          
          <div className="section-card glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-doc-black">Multi-channel Distribution</h3>
            <p className="text-doc-gray mb-4">Seamlessly publish your content across social media, your website, email newsletters, and patient portals with a single click.</p>
            <div className="bg-doc-blue/10 p-4 rounded-lg">
              <p className="text-sm text-doc-black/80 italic">"I can now reach patients wherever they are online without having to manage multiple platforms separately."</p>
            </div>
          </div>
          
          <div className="section-card glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-doc-black">Impact Analytics</h3>
            <p className="text-doc-gray mb-4">Track engagement metrics, patient acquisition, and reputation growth to see the direct impact of your educational content.</p>
            <div className="bg-doc-purple/10 p-4 rounded-lg">
              <p className="text-sm text-doc-black/80 italic">"The analytics dashboard helps me understand which topics resonate with my audience so I can focus my efforts."</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <SignupDialog 
            trigger={
              <Button className="btn-primary gap-2 text-base h-12 px-8 group" size="lg">
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            } 
          />
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-doc-blue-light"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-doc-blue-light"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-doc-blue-light"></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
