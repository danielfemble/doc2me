
import { cn } from "@/lib/utils";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className }: PlatformVisualProps) => {
  return (
    <div className={cn("relative w-full max-w-6xl mx-auto", className)}>
      <div className="platform-visual-wrapper relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 backdrop-blur-sm">
        <img 
          src="/lovable-uploads/4d8f4b1d-1d7d-4590-84df-3cab0a38dd4f.png"
          alt="Doc2Me Platform - Video Management Interface"
          className="w-full h-auto object-contain"
          style={{ maxHeight: '600px' }}
        />
        
        {/* Subtle overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Background glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-doc-blue/20 via-doc-purple/20 to-doc-blue/20 rounded-3xl blur-2xl opacity-30 -z-10" />
    </div>
  );
};

export default PlatformVisual;
