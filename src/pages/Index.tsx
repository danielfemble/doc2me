
import { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { MessageSquare, Globe, Star } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Initialize animation observers for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a staggered delay based on index
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, index * 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
      observer.observe(card);
    });
    
    // Add subtle 3D tilt effect to platform visual
    const platformVisual = document.querySelector('.platform-visual-wrapper');
    if (platformVisual) {
      const platformVisualElement = platformVisual as HTMLElement;
      
      document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate rotation based on mouse position (reduced intensity for subtlety)
        const xRotation = (clientY / windowHeight - 0.5) * 5; // Reduced from 8 to 5 
        const yRotation = (clientX / windowWidth - 0.5) * -5; // Reduced from 8 to 5
        
        // Apply the rotation transform with smooth transition
        platformVisualElement.style.transition = 'transform 0.2s ease-out';
        platformVisualElement.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });
      
      // Reset transform when mouse leaves
      document.addEventListener('mouseleave', () => {
        platformVisualElement.style.transition = 'transform 0.5s ease-out';
        platformVisualElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    }

    // Add parallax effect to background elements
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const moveX = (clientX / windowWidth - 0.5) * 20;
      const moveY = (clientY / windowHeight - 0.5) * 20;
      
      const blurs = document.querySelectorAll('.blur-3xl');
      blurs.forEach((blur) => {
        const blurElement = blur as HTMLElement;
        blurElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
    
    return () => {
      featureCards.forEach(card => {
        observer.unobserve(card);
      });
      
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseleave', () => {});
    };
  }, []);

  const benefitCards = [
    {
      icon: <MessageSquare size={24} />,
      title: "Less Repetitive Questions",
      description: "Provide complete information upfront so patients don't need to ask the same questions repeatedly."
    },
    {
      icon: <Globe size={24} />,
      title: "Boost Online Presence",
      description: "Grow your digital footprint with content that attracts patients searching for health information."
    },
    {
      icon: <Star size={24} />,
      title: "Build Trust",
      description: "Establish credibility and trust with professionally crafted, accurate health content."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0271e5]/10 to-white/90 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-[#0271e5]/10 blur-3xl transition-transform duration-1000 ease-out"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-doc-purple/10 blur-3xl transition-transform duration-1000 ease-out"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-doc-purple-light/10 blur-3xl transition-transform duration-1000 ease-out"></div>
      </div>
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <PricingSection />
        <section className="py-16 relative z-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Health Providers Choose Us</h2>
              <p className="text-lg text-doc-gray max-w-2xl mx-auto">
                Our platform helps you create medically accurate content that connects with patients
                and grows your practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {benefitCards.map((card, index) => (
                <div key={index} className="benefit-card p-6 rounded-xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-doc-blue/10">
                  <div className="benefit-icon mb-4 text-white bg-gradient-to-r from-doc-blue to-doc-purple rounded-full p-3 inline-flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-doc-black">{card.title}</h3>
                  <p className="text-doc-gray">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
