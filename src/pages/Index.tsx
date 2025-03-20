
import { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

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
    
    // Add 3D tilt effect to platform visual
    const platformVisual = document.querySelector('.platform-visual-wrapper');
    if (platformVisual) {
      const platformVisualElement = platformVisual as HTMLElement;
      
      document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate rotation based on mouse position
        const xRotation = (clientY / windowHeight - 0.5) * 5; // Max 5deg
        const yRotation = (clientX / windowWidth - 0.5) * -5; // Max 5deg
        
        // Apply the rotation transform
        platformVisualElement.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });
    }
    
    return () => {
      featureCards.forEach(card => {
        observer.unobserve(card);
      });
      
      document.removeEventListener('mousemove', () => {});
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-doc-blue-light/10 to-white/90 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-doc-blue/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"></div>
      </div>
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
