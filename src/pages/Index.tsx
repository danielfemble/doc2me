
import { useEffect } from 'react';
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
      document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate rotation based on mouse position
        const xRotation = (clientY / windowHeight - 0.5) * 5; // Max 5deg
        const yRotation = (clientX / windowWidth - 0.5) * -5; // Max 5deg
        
        // Apply the rotation transform
        platformVisual.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
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
    <div className="min-h-screen bg-white overflow-hidden">
      <NavBar />
      <main>
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
