
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
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
      <DialogContent className="sm:max-w-[600px] h-auto max-h-[90vh] overflow-hidden border-2 border-doc-blue/40 shadow-[0_0_15px_rgba(2,113,229,0.4)] bg-white">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark rounded-lg opacity-50 blur-sm animate-pulse-slow"></div>
            <div className="relative bg-white rounded-md p-1">
              <iframe 
                width="540" 
                height="580" 
                src="https://sibforms.com/serve/MUIFAGpsJ0RSg2mumVscA7Sdr6Pfr0ZzTlZowr6iZ6uY73n032zRzrkFEj2DdjZOx2_VlCks8Af7pDmQI5-si6LJBt5hx6kbyH8q9BapzcamZNnuTPHuVsY447w4gMEcvZakIBc5ss7LtRFBlM6c7STy0AQ2cPoh_UVJQOp5l0YbzBmWfh9kY1Nmb-pReIl3qY4ekOF8SOUzGF1k" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                className="rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
        
        {/* Background effects - positioned beneath content */}
        <div className="absolute inset-0 bg-gradient-to-br from-doc-blue/10 via-doc-purple/10 to-doc-blue-dark/10 z-0"></div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
