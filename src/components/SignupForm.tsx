
import { useState } from "react";
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
import { sendToGoogleSheets } from "@/utils/googleSheets";

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
  sheetsUrl: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SignupForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      clinic: "",
      sheetsUrl: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Get the Google Sheets URL (either from the form or from localStorage)
      const sheetsUrl = data.sheetsUrl || localStorage.getItem('googleSheetsUrl') || '';
      
      // Save the URL to localStorage for future use if provided
      if (data.sheetsUrl) {
        localStorage.setItem('googleSheetsUrl', data.sheetsUrl);
      }
      
      if (sheetsUrl) {
        // Send data to Google Sheets
        const success = await sendToGoogleSheets(
          { name: data.name, email: data.email, clinic: data.clinic },
          sheetsUrl
        );
        
        if (success) {
          toast.success("Sign-up successful! We'll be in touch soon.");
          
          if (onSuccess) {
            onSuccess();
          }
        } else {
          toast.error("Failed to save your information. Please try again.");
        }
      } else {
        // Fallback to simulated success if no Google Sheets URL is provided
        console.log("No Google Sheets URL provided. Form data:", data);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success("Sign-up successful! We'll be in touch soon.");
        
        if (onSuccess) {
          onSuccess();
        }
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

        <FormField
          control={form.control}
          name="sheetsUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Google Sheets URL (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your Google Apps Script Web App URL" 
                  {...field} 
                  defaultValue={localStorage.getItem('googleSheetsUrl') || ''}
                />
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
