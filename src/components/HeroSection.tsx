
import { ArrowRight, Camera, Play, MessageCircle, ThumbsUp, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon">
              <span className="text-sm text-doc-black font-medium">For Clinics & Doctors</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-doc-black leading-tight md:leading-tight">
              <span className="block">More than</span>
              <span className="block">patient education.</span>
              <span className="text-[#0271e5] animate-pulse-slow">Doctor-Driven. Effortless. Instant.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-doc-gray leading-relaxed">
              We're on a mission to extend the power of doctors beyond the clinic—with content that lasts. Create, personalize, and share short-form videos with your patients in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group gap-2 text-base h-12" size="lg">
                Try Doc2Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-doc-gray pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                    <img
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by <b>500+</b> fertility specialists</span>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1">
            <div className="platform-visual-wrapper perspective-900 max-w-[42rem] mx-auto">
              <div className="relative mx-auto">
                <div className="relative z-10 mx-auto bg-gray-800 rounded-t-xl overflow-hidden shadow-2xl transform -rotate-1 border-8 border-gray-800">
                  <div className="relative bg-white overflow-hidden">
                    <img 
                      src="/lovable-uploads/aeff4df8-b14d-4ad8-bd87-69d32ece5428.png" 
                      alt="Fertility clinic platform interface"
                      className="w-full h-auto object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none"></div>
                  </div>
                  
                  <div className="h-4 bg-gray-800 rounded-b-lg"></div>
                </div>
                
                <div className="absolute -top-8 -right-4 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                      <Scan className="w-5 h-5" />
                    </div>
                    <span className="font-medium whitespace-nowrap">AI Content Creation</span>
                  </div>
                </div>
                
                <div className="absolute bottom-16 -left-6 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium whitespace-nowrap">Share with patients</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 right-16 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      <ThumbsUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Patient engagement up 78%</p>
                      <p className="text-xs text-gray-500">Since implementing Doc2Me</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 w-40 h-40 rounded-full bg-[#0271e5]/30 blur-3xl top-1/2 -translate-y-1/2 left-1/4"></div>
              <div className="absolute -z-10 w-60 h-60 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
