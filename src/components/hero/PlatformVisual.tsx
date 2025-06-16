
import { cn } from "@/lib/utils";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className }: PlatformVisualProps) => {
  return (
    <div className={cn("relative w-full max-w-none mx-auto", className)}>
      <div className="platform-visual-wrapper relative">
        <img 
          src="/lovable-uploads/4d8f4b1d-1d7d-4590-84df-3cab0a38dd4f.png"
          alt="Doc2Me Platform - Video Management Interface"
          className="w-full h-auto object-contain"
        />
        
        {/* Floating UI Elements */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-doc-black">Live Recording</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-doc-black">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 text-yellow-400">⭐</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6 bg-doc-blue/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
          <span className="text-sm font-medium text-white">+2.5k Views Today</span>
        </div>
        
        <div className="absolute bottom-6 right-6 bg-doc-purple/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="text-sm font-medium text-white">AI Powered</span>
        </div>
        
        <div className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="text-center">
            <div className="text-lg font-bold text-doc-blue">98%</div>
            <div className="text-xs text-doc-gray">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformVisual;
