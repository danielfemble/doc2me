
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { toast } from "sonner";
import { 
  sendToSupabase, 
  checkSignupsTable, 
  isSupabaseConfigured, 
  isClientInitialized 
} from "@/utils/supabase";
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  clinic: z.string().min(1, {
    message: "Please enter your clinic or practice name.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SignupForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFallbackWarning, setShowFallbackWarning] = useState(false);

  useEffect(() => {
    // Only show the fallback warning if Supabase environment variables exist 
    // but the table doesn't exist or there's another connection issue
    const checkConnection = async () => {
      // First check if Supabase environment variables are configured
      if (!isSupabaseConfigured()) {
        console.log("Supabase is not configured (missing env vars), not showing fallback warning");
        setShowFallbackWarning(false);
        return;
      }
      
      // If Supabase client failed to initialize, show warning
      if (!isClientInitialized()) {
        console.log("Supabase client failed to initialize, showing fallback warning");
        setShowFallbackWarning(true);
        return;
      }
      
      // If Supabase is configured and client initialized but table doesn't exist, show warning
      try {
        const tableExists = await checkSignupsTable();
        setShowFallbackWarning(!tableExists);
        
        if (!tableExists) {
          console.warn("Supabase is connected, but the 'signups' table was not found");
        } else {
          console.log("Supabase is fully configured and working correctly");
        }
      } catch (error) {
        console.error("Error checking Supabase connection:", error);
        setShowFallbackWarning(true);
      }
    };
    
    checkConnection();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      clinic: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send data to Supabase (or fallback mode if not configured)
      const success = await sendToSupabase({
        name: data.name,
        email: data.email,
        clinic: data.clinic,
      });
      
      if (success) {
        toast.success("Sign-up successful! We'll be in touch soon.");
        form.reset();
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error("Failed to save your information. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      {showFallbackWarning && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">
            Running in data collection mode. Your information will be saved when our database is online.
          </span>
        </div>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Dr. Jane Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="doctor@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clinic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Clinic or Practice Name</FormLabel>
              <FormControl>
                <Input placeholder="City Medical Center" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-doc-blue hover:bg-doc-blue-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Get Early Access"}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
