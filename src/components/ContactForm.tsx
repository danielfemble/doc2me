
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto text-center space-y-4">
      <p className="text-lg text-doc-gray">
        Have a question or want to get in touch? 
      </p>
      <a 
        href="mailto:contact@doc2me.co" 
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-doc-blue text-white rounded-md hover:bg-doc-blue-dark transition-colors"
      >
        <Mail className="w-5 h-5" />
        Email us at contact@doc2me.co
      </a>
    </div>
  );
};

export default ContactForm;

