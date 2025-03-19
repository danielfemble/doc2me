
import { ArrowRight, Camera, Play, MessageCircle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-doc-blue-light/30 to-white/90">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full py-1.5 px-4 shadow-sm">
              <span className="bg-doc-blue text-white text-xs font-semibold py-0.5 px-2 rounded-full mr-2">NEW</span>
              <span className="text-sm text-doc-black">More than patient education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-doc-black leading-tight md:leading-tight">
              <span className="block">Doctor-Driven.</span>
              <span className="block">Effortless.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-doc-blue to-doc-blue-dark">Instant.</span>
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

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-doc-blue-light/30 to-transparent rounded-3xl transform rotate-3 opacity-70"></div>
            <div className="relative bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-doc-blue text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span className="font-medium">Recording Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 pb-0">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070" 
                    alt="Doctor recording video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2">
                    <div className="bg-doc-blue-light text-doc-blue text-xs font-medium py-1 px-2 rounded">
                      Diabetes Management
                    </div>
                    <div className="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-2 rounded">
                      2:34
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <ThumbsUp className="w-4 h-4" />
                    <span>98%</span>
                    <MessageCircle className="w-4 h-4 ml-2" />
                    <span>12</span>
                  </div>
                </div>
                <h3 className="font-medium mb-4">Managing blood sugar levels between appointments</h3>
              </div>
              <div className="bg-gradient-to-t from-white to-transparent h-24 absolute bottom-0 left-0 right-0"></div>
            </div>

            <div className="absolute bottom-12 -right-8 bg-white p-4 rounded-xl shadow-glass border border-gray-100 animate-float">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
