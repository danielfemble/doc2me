
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
            src="https://sibforms.com/serve/MUIFAFZgBi2la9ia67FmxJ4AvU8ykmNTIIoKGqZfS4J4gDnWxKzQCxuEWmh7Xp2PlJd2MgPXdyAVPgm0p4FRzsHXxC8oUSrt-AUbfPjXEHiqy372lzjX4MgxdPl22J3bpBrtqV8PLAXipWzvbY9j24I13qK3pt4mHpZBZZXagOEHLzRpGFnLlCkaqNqHFuHcotB3qm-JBe1vt72u"
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
