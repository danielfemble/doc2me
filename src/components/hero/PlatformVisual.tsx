

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
              {/* "AI Content Support" - positioned above the image */}
              <div className="absolute -top-16 right-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">AI Content Support</span>
                </div>
              </div>
              
              {/* "Create short-videos in seconds" - positioned lower by additional 20px */}
              <div className="absolute top-4 left-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Create short-videos in seconds</span>
                </div>
              </div>
              
              {/* AI Content Enhancements - moved 20px higher than before */}
              <div className="absolute -bottom-4 right-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                    <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">AI Content Enhancements</p>
                  </div>
                </div>
              </div>
              
              {/* Share with patients - moved 20px higher than before */}
              <div className="absolute -bottom-20 left-4 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
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
            {/* Conditional image rendering based on device type */}
            <div className={`relative w-full ${isMobile ? 'h-[110vh]' : 'h-[80vh]'} rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm`}>
              <img 
                src="https://github.com/danielfemble/Assets/blob/main/Green%20Minimalist%20Digital%20Product%20Mockups%20Instagram%20Post%20(1).gif?raw=true"
                alt="Doc2Me animated digital product mockup"
                className="w-full h-full object-contain p-2"
                style={{ imageRendering: 'auto' }}
                loading="eager"
              />
            </div>
          </div>
          
          {/* Desktop overlays - hidden on mobile */}
          {!isMobile && (
            <>
              {/* "Create short-videos in seconds" banner - positioned further down for desktop */}
              <div className="absolute top-0 left-[20%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                    <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium whitespace-nowrap">Create short-videos in seconds</span>
                </div>
              </div>
              
              {/* AI Content Support - positioned further down for desktop */}
              <div className="absolute top-4 right-[20%] neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
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

