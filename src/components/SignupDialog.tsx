
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
      <DialogContent className="sm:max-w-[600px] h-auto max-h-[90vh] overflow-hidden border-none shadow-xl relative p-6">
        {/* Enhanced animated gradient background with motion */}
        <div className="absolute inset-0 bg-gradient-to-br from-doc-blue/30 to-doc-purple/30 animate-pulse opacity-80 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 animate-pulse opacity-50 -z-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md -z-10"></div>
        
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-doc-blue to-doc-purple bg-clip-text text-transparent pb-1">
            Request a Demo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            We provide exclusive demos to a hand-picked circle of health providers
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 relative z-10">
          <div className="rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-neon border border-white/50 hover:border-doc-blue/30">
            <iframe 
              width="540" 
              height="550" 
              src="https://sibforms.com/serve/MUIFAGpsJ0RSg2mumVscA7Sdr6Pfr0ZzTlZowr6iZ6uY73n032zRzrkFEj2DdjZOx2_VlCks8Af7pDmQI5-si6LJBt5hx6kbyH8q9BapzcamZNnuTPHuVsY447w4gMEcvZakIBc5ss7LtRFBlM6c7STy0AQ2cPoh_UVJQOp5l0YbzBmWfh9kY1Nmb-pReIl3qY4ekOF8SOUzGF1k" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
              className="rounded-md"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
