
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
              <p className="text-lg text-doc-gray">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
