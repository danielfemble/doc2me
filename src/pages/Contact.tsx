
import { Helmet } from "react-helmet";
import { Mail } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Doc2Me</title>
        <meta name="description" content="Get in touch with the Doc2Me team. We're here to answer your questions and help you get started." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-28 pb-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-doc-black">Contact Us</h1>
              <p className="text-lg text-doc-gray mb-8">
                We'd love to hear from you. Reach out to us through email and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-3 text-doc-gray text-xl mb-6">
                  <Mail className="w-6 h-6 text-doc-blue" />
                  <span className="font-medium">contact@doc2me.co</span>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-doc-blue hover:bg-doc-blue-dark text-white px-8 py-6 text-lg h-auto"
                  onClick={() => window.location.href = "mailto:contact@doc2me.co"}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send us an Email
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
