
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
      <DialogContent className="sm:max-w-[600px] h-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Demo</DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            We provide exclusive demos to a hand-picked circle of health providers
          </p>
        </DialogHeader>
        <div className="mt-4">
          <iframe 
            width="540" 
            height="305" 
            src="https://sibforms.com/serve/MUIFANdblyA5PfA17N1KeZsH2jG1KLChJSxgbZUyh47AtKiZgN0jWxm6I0UNcecRIpXyhCN1loBeiwNhYWS9zahAxq83odE79rVjoH9W90ldpzNOFM1WpNb_iAIkpTBUeYLvHy0kLm-SGi3a5shRJKvTT-2X3qbpqy9o8hoD4G1Hzyazd4-H0_sMqsV-B4VNqSr5L6URo3KjqtNl" 
            frameBorder="0" 
            scrolling="auto" 
            allowFullScreen 
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
            className="rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
