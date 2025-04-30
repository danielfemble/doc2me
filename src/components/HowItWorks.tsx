
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

    // Observer for section cards with stacking effect
    sectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
    }, { threshold: 0.2, rootMargin: "-50px" });

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
    <section id="how-it-works" className="bg-gradient-to-b from-white to-doc-blue-light/20 py-20 md:py-28">
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
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-doc-blue-light/60 -z-10 transform -translate-y-1/2"></div>
          
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

        <div className="grid grid-cols-1 gap-8 mb-16 perspective-900">
          <Card className="section-card border-doc-blue-light/30 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-doc-blue-light/20 to-white p-6 border-b border-doc-blue-light/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-doc-blue rounded-full flex items-center justify-center text-white shadow-md">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-doc-black">Create Professional, Educational Content with Ease</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">AI-Powered Video Creation</h4>
                  <p className="text-doc-gray mb-4">
                    Our AI guides you step-by-step in creating high-quality educational videos tailored to your expertise. Whether you're explaining medical procedures, providing general health tips, or addressing common patient concerns, Doc2Me makes the process seamless.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Become a Thought Leader</h4>
                  <p className="text-doc-gray mb-4">
                    Position yourself as a trusted authority in your field by sharing valuable insights with your audience. No more relying on costly agencies or spending hours on content creation – Doc2Me empowers you to create meaningful, informative videos quickly and effectively.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">No Need for a Marketing Team</h4>
                  <p className="text-doc-gray mb-4">
                    Skip the hassle of hiring marketing professionals. With our AI, you can easily craft videos that attract attention and help you grow your online presence—without additional staff or effort.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Effortless Branding</h4>
                  <p className="text-doc-gray">
                    Create videos that align with your practice's brand, making it easy to maintain consistency in your messaging across all platforms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="section-card border-doc-purple-light/30 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-doc-purple-light/20 to-white p-6 border-b border-doc-purple-light/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-doc-purple rounded-full flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-doc-black">Enhance Your Videos Automatically with AI-Powered Tools</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-purple">Automatic Content Enhancement</h4>
                  <p className="text-doc-gray mb-4">
                    Doc2Me's AI automatically improves your videos by generating concise summaries, adding relevant visual aids, captions, and ensuring that the content is clear and engaging for your audience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-purple">Sourcing from Trusted Scientific Resources</h4>
                  <p className="text-doc-gray mb-4">
                    Our AI intelligently sources content from reputable scientific journals and databases, ensuring that your videos are not only professional but scientifically accurate. You can also upload content from your own library for a fully personalized experience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-purple">Tailored to Your Patients' Needs</h4>
                  <p className="text-doc-gray mb-4">
                    Whether your audience is looking for specific medical information or general health advice, Doc2Me personalizes your videos for the exact needs of your patients.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-purple">Enhanced Visuals</h4>
                  <p className="text-doc-gray">
                    Doc2Me automatically enhances your video with visual aids like charts, infographics, and diagrams, making it easier for your patients to understand the information you're sharing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="section-card border-doc-blue-light/30 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-doc-blue-light/20 to-white p-6 border-b border-doc-blue-light/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-doc-blue rounded-full flex items-center justify-center text-white shadow-md">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-doc-black">Easily Share Your Videos on Multiple Platforms</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Multi-Platform Distribution</h4>
                  <p className="text-doc-gray mb-4">
                    Doc2Me allows you to distribute your content across multiple platforms with ease. Share your videos on your practice's website, your social media channels, or directly via QR codes that can be scanned in your office.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Exclusive Patient Access</h4>
                  <p className="text-doc-gray mb-4">
                    Want to keep certain content exclusive for your patients? Easily create private video links or share them directly with your patient portal for personalized, secure access.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Maximize Your Reach</h4>
                  <p className="text-doc-gray mb-4">
                    Boost your online presence by sharing educational teasers or promotional videos on social media, helping you attract new patients while keeping your existing ones informed.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-doc-blue">Track Performance</h4>
                  <p className="text-doc-gray">
                    With Doc2Me's integrated analytics, you can track how your videos are performing across platforms. See who's watching, how long they're engaging, and refine your content strategy accordingly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <SignupDialog 
            trigger={
              <Button className="btn-primary gap-2 text-base h-12" size="lg">
                Request Demo
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
