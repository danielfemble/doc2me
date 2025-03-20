
import { MessageCircle, ThumbsUp, Scan, BrainCircuit } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className = "" }: PlatformVisualProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`relative w-full ${className}`}>
      <div className="platform-visual-wrapper perspective-900 max-w-full mx-auto">
        {/* Main app interface image */}
        <div className="relative transform rotate-[5deg] hover:rotate-0 transition-transform duration-500">
          <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <img 
              src="/lovable-uploads/c215f788-d5cb-4d22-91ff-e037865ea9df.png" 
              alt="Doc2Me Platform Interface" 
              className="w-full h-auto"
            />
            
            {/* Interactive floating elements */}
            <div className="absolute -top-8 -left-8 neo-glass p-4 rounded-xl shadow-neon border border-white/10 z-20 animate-float-delayed bg-gray-900/80">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="font-medium whitespace-nowrap text-white">AI-Powered Visuals</span>
              </div>
            </div>
            
            {/* Share with patients - Bottom right */}
            <div className="absolute bottom-4 right-4 neo-glass p-4 rounded-xl shadow-neon border border-white/10 z-20 animate-float-delay-200 bg-gray-900/80">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium whitespace-nowrap text-white">Share with patients</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glowing orbs for visual effect */}
        <div className="absolute -z-10 w-40 h-40 rounded-full bg-[#0271e5]/30 blur-3xl top-1/2 -translate-y-1/2 left-1/4"></div>
        <div className="absolute -z-10 w-60 h-60 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default PlatformVisual;
