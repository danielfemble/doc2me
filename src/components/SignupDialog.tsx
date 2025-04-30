
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SignupDialogProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const SignupDialog = ({ trigger, defaultOpen = false }: SignupDialogProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] h-auto max-h-[90vh] relative overflow-hidden border border-white/40 shadow-neon">
        {/* Animated background gradient */}
        <div className="absolute inset-0 animated-gradient opacity-20 z-0"></div>
        
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-10"></div>
        
        {/* Content */}
        <div className="relative z-20">
          <DialogHeader>
            <DialogTitle className="text-2xl animated-gradient-text font-bold">
              Request a Demo
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-2">
              We provide exclusive demos to a hand-picked circle of health providers
            </p>
          </DialogHeader>
          <div className="mt-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-md opacity-50 blur-sm animate-pulse-slow"></div>
            <div className="relative">
              <iframe 
                width="540" 
                height="550" 
                src="https://sibforms.com/serve/MUIFAGpsJ0RSg2mumVscA7Sdr6Pfr0ZzTlZowr6iZ6uY73n032zRzrkFEj2DdjZOx2_VlCks8Af7pDmQI5-si6LJBt5hx6kbyH8q9BapzcamZNnuTPHuVsY447w4gMEcvZakIBc5ss7LtRFBlM6c7STy0AQ2cPoh_UVJQOp5l0YbzBmWfh9kY1Nmb-pReIl3qY4ekOF8SOUzGF1k" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                className="rounded-md shadow-soft transition-all duration-300 hover:shadow-feature-hover"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
