
import { Helmet } from "react-helmet";
import { Mail } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Contact Us | Doc2Me</title>
        <meta name="description" content="Get in touch with the Doc2Me team. We're here to answer your questions and help you get started." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-28 pb-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-doc-black">Contact Us</h1>
              <p className="text-lg text-doc-gray mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-doc-gray text-xl mb-8">
                <Mail className="w-6 h-6 text-doc-blue" />
                <span className="font-medium">contact@doc2me.co</span>
              </div>
            </div>

            {/* Contact Form with Gradient Background */}
            <div className="max-w-2xl mx-auto">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-doc-blue/10 via-doc-purple/5 to-doc-blue-dark/10 backdrop-blur-sm border border-white/20 shadow-neon">
                <div className="absolute inset-0 bg-gradient-to-br from-doc-blue/5 via-transparent to-doc-purple/5 rounded-3xl"></div>
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="800" 
                    src="https://d1503a6e.sibforms.com/serve/MUIFAK7DxjvhrpXfVaZqV4OW8PUV3tsTF-DkyxmFqqXvZlT7-_Jwx8L8kfeb_2hkjwUHG22-HGKxsJYejG2BF_dOomD0GiFJH8b4HvMj1WqNYsgt8YUyCcWiDDuSFf6rMnM4Cda5VEF4VIQrm_vhKcaZ1rLYg-aPzIX1pqx3WQC2hCzuCNAiL5w4RNI3Gf7MRmbN3HMVSzjA0kZY"
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen 
                    className="rounded-2xl w-full"
                    style={{ 
                      display: 'block', 
                      marginLeft: 'auto', 
                      marginRight: 'auto', 
                      maxWidth: '100%',
                      minHeight: '600px'
                    }}
                    title="Contact Form"
                  />
                </div>
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
