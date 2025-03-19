
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
    // Initialize animation observers or any other effects
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
    
    return () => {
      featureCards.forEach(card => {
        observer.unobserve(card);
      });
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
