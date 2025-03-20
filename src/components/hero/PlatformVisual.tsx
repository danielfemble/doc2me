
import { MessageCircle, ThumbsUp, Scan, BrainCircuit } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className = "" }: PlatformVisualProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`relative w-full ${className}`}>
      <div className="platform-visual-wrapper perspective-900 mx-auto">
        <div className="relative mx-auto">
          {/* Main content display */}
          <div className="relative z-10 mx-auto overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.03] transition-transform duration-300">
            {/* Main interface with doctor - maximized aspect ratio */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gray-100">
              {/* Doctor in video call */}
              <div className="relative w-full h-full bg-gray-900">
                <img 
                  src="/lovable-uploads/ed5ef07e-38b3-4cb2-a66b-d486545ffa2f.png" 
                  alt="Doctor in video call"
                  className="w-full h-full object-cover"
                />
                
                {/* AI-enhanced overlay - shows on all screen sizes now */}
                <div className="absolute bottom-24 right-4 sm:bottom-32 sm:right-12 z-20">
                  {/* Fallopian tube visualization with overlay */}
                  <div className="relative w-64 sm:w-80 h-48 sm:h-60 rounded-lg overflow-hidden border-2 border-[#0271e5] shadow-neon animate-float-delay-200">
                    <img 
                      src="/lovable-uploads/900eb547-122c-4281-8854-c515037a44e0.png" 
                      alt="Fallopian tube visualization"
                      className="w-full h-full object-cover"
                    />
                    {/* Doc2Me branding overlay on top right of the fallopian tube image */}
                    <div className="absolute top-2 right-2 bg-white/90 rounded-md py-1 px-2 z-10">
                      <span className="text-sm font-bold text-[#0271e5]">Doc2Me</span>
                      <span className="text-xs text-gray-600 ml-1">Enhanced</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0271e5]/80 text-white text-xs py-1 px-2">
                      <p className="font-medium text-center">Fallopian Tube Diagram</p>
                    </div>
                  </div>
                </div>
                
                {/* Recording indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-black/70 rounded-full py-1 px-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs text-white">00:08</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none"></div>
          </div>
          
          {/* Floating UI elements - now positioned around the main image */}
          <div className="absolute -top-12 -right-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-medium whitespace-nowrap">AI Content Creation</span>
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-12 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-medium whitespace-nowrap">Share with patients</span>
            </div>
          </div>
          
          <div className="absolute top-1/3 -left-6 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">AI-Powered Content</p>
                <p className="text-xs text-gray-500 hidden sm:block">Personalized for patients</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background glowing effects */}
        <div className="absolute -z-10 w-40 h-40 rounded-full bg-[#0271e5]/30 blur-3xl top-1/3 -translate-y-1/2 left-0"></div>
        <div className="absolute -z-10 w-60 h-60 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-1/4"></div>
      </div>
    </div>
  );
};

export default PlatformVisual;
