
import { MessageCircle, ThumbsUp, Scan, BrainCircuit, Bot } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className = "" }: PlatformVisualProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`relative w-full ${className}`}>
      <div className="platform-visual-wrapper perspective-900 mx-auto">
        <div className="relative mx-auto max-w-6xl">
          {/* Mobile: Four overlays positioned around the image */}
          {isMobile && (
            <>
              {/* "Create short-videos in seconds" - moved higher up above the image */}
              <div className="absolute -top-16 left-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Create short-videos in seconds</span>
                </div>
              </div>
              
              {/* "AI Content Support" - moved higher up above the image */}
              <div className="absolute -top-16 right-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">AI Content Support</span>
                </div>
              </div>
              
              {/* AI Content Enhancements - moved to below the image */}
              <div className="absolute -bottom-24 right-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                    <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">AI Content Enhancements</p>
                  </div>
                </div>
              </div>
              
              {/* Share with patients - moved below the image and below AI Content Enhancements */}
              <div className="absolute -bottom-40 left-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                    <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Share with patients</span>
                </div>
              </div>
            </>
          )}
          
          {/* Main content display */}
          <div className="relative z-10 mx-auto">
            {/* Doctor image - even taller aspect ratio on mobile */}
            <div className="relative w-full" style={{ aspectRatio: isMobile ? "1/1.2" : "3/2" }}>
              <img 
                src="/lovable-uploads/d0f874de-04b5-460a-99be-6dddaf353eef.png" 
                alt="Doctor explaining egg freezing success rates"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          {/* Desktop overlays - hidden on mobile */}
          {!isMobile && (
            <>
              {/* "Create short-videos in seconds" banner - positioned for desktop */}
              <div className="absolute -top-8 left-[20%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Create short-videos in seconds</span>
                </div>
              </div>
              
              {/* AI Content Support - positioned for desktop */}
              <div className="absolute -top-4 right-[20%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">AI Content Support</span>
                </div>
              </div>
              
              {/* Share with patients - positioned for desktop */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[12%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                    <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Share with patients</span>
                </div>
              </div>
              
              {/* AI Content Enhancements - positioned for desktop */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[12%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                    <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">AI Content Enhancements</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Background glowing effects */}
        <div className="absolute -z-10 w-60 h-60 rounded-full bg-[#0271e5]/30 blur-3xl top-1/3 -translate-y-1/2 left-0"></div>
        <div className="absolute -z-10 w-80 h-80 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-1/4"></div>
        <div className="absolute -z-10 w-40 h-40 rounded-full bg-doc-blue-light/30 blur-3xl top-1/4 right-1/5"></div>
      </div>
    </div>
  );
};

export default PlatformVisual;
