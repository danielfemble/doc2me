
import { cn } from "@/lib/utils";

interface PlatformVisualProps {
  className?: string;
}

const PlatformVisual = ({ className }: PlatformVisualProps) => {
  return (
    <div className={cn("relative w-full max-w-none mx-auto", className)}>
      <img 
        src="/lovable-uploads/4d8f4b1d-1d7d-4590-84df-3cab0a38dd4f.png"
        alt="Doc2Me Platform - Video Management Interface"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default PlatformVisual;
