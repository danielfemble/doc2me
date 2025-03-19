
import { ArrowRight, Camera, Play, MessageCircle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-doc-blue-light/30 to-white/90">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full py-1.5 px-4 shadow-sm">
              <span className="text-sm text-doc-black font-medium">For Doctors & Clinics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-doc-black leading-tight md:leading-tight">
              <span className="block">More than</span>
              <span className="block">patient education.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-doc-blue to-doc-blue-dark">Doctor-Driven. Effortless. Instant.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-doc-gray leading-relaxed">
              We're on a mission to extend the power of doctors beyond the clinic—with content that lasts. Create, personalize, and share short-form videos with your patients in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group gap-2 text-base h-12" size="lg">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary gap-2 text-base h-12" size="lg">
                <Play className="w-4 h-4 text-doc-blue" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-doc-gray pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by <b>2,000+</b> healthcare professionals</span>
            </div>
          </div>

          <div className="relative w-full lg:w-auto">
            <div className="platform-visual-wrapper perspective-900 w-full max-w-[40rem] mx-auto">
              <img 
                src="/lovable-uploads/a5f840a4-b821-4913-b17a-34e3533fd6d5.png" 
                alt="Doc2Me platform interface"
                className="w-full h-auto z-10 relative transform rotate-2 shadow-2xl rounded-xl animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-4 bg-white p-4 rounded-xl shadow-glass border border-gray-100 z-20 animate-float-delayed">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-doc-blue text-white p-2 rounded-lg">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Content session</span>
                </div>
              </div>
              
              <div className="absolute bottom-16 -left-6 bg-white p-4 rounded-xl shadow-glass border border-gray-100 z-20 animate-float-delay-200">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-doc-blue-light text-doc-blue p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Share with patients</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-16 bg-white p-4 rounded-xl shadow-glass border border-gray-100 z-20 animate-float-delay-300">
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
              
              {/* Glowing orbs */}
              <div className="absolute -z-10 w-40 h-40 rounded-full bg-blue-400/30 blur-3xl top-1/2 -translate-y-1/2 left-1/4"></div>
              <div className="absolute -z-10 w-60 h-60 rounded-full bg-purple-400/20 blur-3xl bottom-0 right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
