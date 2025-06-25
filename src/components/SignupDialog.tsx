
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SignupDialogProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const SignupDialog = ({ trigger, defaultOpen = false }: SignupDialogProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const isMobile = useIsMobile();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] h-auto max-h-[95vh] overflow-hidden border-2 border-doc-blue/40 shadow-[0_0_30px_rgba(2,113,229,0.6)] bg-white">
        {/* Content wrapper with proper z-index */}
        <div className="relative z-20 w-full h-full">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark bg-clip-text text-transparent">
              Request a Demo
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-2">
              We provide exclusive demos to a hand-picked circle of health providers
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 relative">
            {/* Enhanced gradient border with animation */}
            <div className="absolute -inset-2 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-75 blur-md animate-pulse-slow"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-50 blur-sm animate-gradient-xy"></div>
            <div className="relative bg-white rounded-md p-2 shadow-2xl">
              <iframe 
                width="540" 
                height={isMobile ? "500" : "600"} 
                src="https://d1503a6e.sibforms.com/serve/MUIFALVtMPoPFV5xx5kq8TehzKdFoSTi4MaB-M-ae5WfhgkRQcr8e--01IHRCkz7fiDljb7jMdFuA08UXNqFIw_DsDBop2a7yLhR2kggDinQkiqAQbCLCrjg0ChVY7WG-YWQW9eJHDvpZVAUWQNl2D-RCTr60obTtt-Rrf93wccwrv24wmBgGVeaDFzI2HWFxaC0mzO2tj8XmFZv" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                className="rounded-md shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-doc-blue/20"
              />
            </div>
          </div>
        </div>
        
        {/* Enhanced background effects with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-doc-blue/15 via-doc-purple/15 to-doc-blue-dark/15 z-0 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-10"></div>
        
        {/* Additional floating particles effect */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-doc-blue/30 rounded-full animate-float z-5"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-doc-purple/40 rounded-full animate-pulse z-5" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-doc-blue-dark/30 rounded-full animate-float z-5" style={{animationDelay: '2s'}}></div>
        
        {/* Enhanced custom X button with glow effect */}
        <DialogClose className="absolute right-4 top-4 rounded-full w-10 h-10 flex items-center justify-center bg-white/95 hover:bg-white shadow-lg hover:shadow-xl z-30 transition-all duration-300 hover:scale-110 border-2 border-doc-blue/30 hover:border-doc-blue/50 group">
          <X className="h-5 w-5 text-doc-blue group-hover:text-doc-blue-dark transition-colors duration-200" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
