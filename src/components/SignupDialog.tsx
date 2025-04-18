
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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Doc2Me</DialogTitle>
        </DialogHeader>
        <div className="mt-4 w-full flex justify-center">
          <iframe 
            src="https://sibforms.com/serve/MUIFAC0h2CeUUFzyN0xZiW56hsrCIv7YymfTLDnCzpUhhqh2g7eSx7vve-DzAbc0dlrPC-pV7mjuxcl7J4pPIkCgihSxJZonofqOACYMvE5JKuI4zCGh764x-Ok1OohSYC0jsj4EN4vJXl-uMkKGrPJtHMA_fcG-L8G0QNJyuBDPUmz7wYloFoUJ67hG9C_MTHOUXKKHw9LrvFrX"
            width="100%"
            height="450px"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ maxWidth: '100%' }}
            className="rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
