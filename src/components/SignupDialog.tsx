
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignupForm from "./SignupForm";

interface SignupDialogProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const SignupDialog = ({ trigger, defaultOpen = false }: SignupDialogProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleSuccess = () => {
    // Close the dialog after successful submission
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Doc2Me</DialogTitle>
          <DialogDescription>
            Get early access to our patient education platform and start combating medical misinformation today.
          </DialogDescription>
        </DialogHeader>
        <SignupForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
