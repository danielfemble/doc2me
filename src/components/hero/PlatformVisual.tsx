
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
          <div className="relative z-10 mx-auto overflow-hidden rounded-xl shadow-2xl">
            {/* Main interface with doctor */}
            <div className="relative w-full aspect-video bg-gray-100">
              {/* Doctor in video call */}
              <div className="relative w-full h-full bg-gray-900">
                <img 
                  src="/lovable-uploads/7af29130-d540-4888-bf83-52220d658c44.png" 
                  alt="Doctor recording educational content"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* "Create content in seconds" banner - positioned to the left */}
          <div className="absolute -top-8 left-8 sm:left-0 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                <Scan className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-medium whitespace-nowrap">Create content in seconds</span>
            </div>
          </div>
          
          {/* AI Content Creation - using BrainCircuit icon */}
          <div className="absolute -top-4 right-0 sm:-right-8 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-medium whitespace-nowrap">AI Content Creation</span>
            </div>
          </div>
          
          {/* Share with patients - repositioned to middle of the picture, using ThumbsUp icon */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-medium whitespace-nowrap">Share with patients</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-14 neo-glass p-3 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
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
        <div className="absolute -z-10 w-60 h-60 rounded-full bg-[#0271e5]/30 blur-3xl top-1/3 -translate-y-1/2 left-0"></div>
        <div className="absolute -z-10 w-80 h-80 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-1/4"></div>
        <div className="absolute -z-10 w-40 h-40 rounded-full bg-doc-blue-light/30 blur-3xl top-1/4 right-1/5"></div>
      </div>
    </div>
  );
};

export default PlatformVisual;
