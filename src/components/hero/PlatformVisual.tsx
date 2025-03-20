
import { MessageCircle, ThumbsUp, Scan, BrainCircuit } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className = "" }: PlatformVisualProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`relative w-full lg:w-auto lg:flex-1 lg:flex-grow pt-8 md:pt-0 md:ml-8 ${className}`}>
      <div className="platform-visual-wrapper perspective-900 max-w-[52rem] mx-auto">
        <div className="relative mx-auto">
          <div className="relative z-10 mx-auto rounded-xl shadow-lg bg-white/80 backdrop-blur-sm p-4 border border-white/50">
            {/* AI-related floating elements */}
            <div className="absolute -top-12 -left-8 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="font-medium whitespace-nowrap">AI-Powered Visuals</span>
              </div>
            </div>
            
            {/* Share with patients - Bottom right */}
            <div className="absolute bottom-4 right-4 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium whitespace-nowrap">Share with patients</span>
              </div>
            </div>
            
            <div className="text-center p-6">
              <p className="text-gray-700 font-medium">Create personalized patient education videos</p>
            </div>
          </div>
        </div>
        
        <div className="absolute -z-10 w-40 h-40 rounded-full bg-[#0271e5]/20 blur-3xl top-1/2 -translate-y-1/2 left-1/4"></div>
        <div className="absolute -z-10 w-60 h-60 rounded-full bg-doc-purple/10 blur-3xl bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default PlatformVisual;
