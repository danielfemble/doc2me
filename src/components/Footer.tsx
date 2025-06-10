
import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-doc-black tracking-tight">
                Doc<span className="text-doc-blue">2</span>Me
              </span>
            </Link>
            <p className="text-doc-gray mb-6">
              A better doctor-patient relationship
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:contact@doc2me.co" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/doc-2-me" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-doc-gray hover:text-doc-blue transition-colors">Contact</Link></li>
              <li><Link to="/imprint" className="text-doc-gray hover:text-doc-blue transition-colors">Imprint</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-doc-gray hover:text-doc-blue transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-doc-gray hover:text-doc-blue transition-colors">How it works</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-doc-gray text-sm">&copy; {currentYear} Doc2Me. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/privacy" className="text-doc-gray hover:text-doc-blue transition-colors">Privacy Policy</Link>
            <Link to="/delete-account-policy" className="text-doc-gray hover:text-doc-blue transition-colors">Delete Account Policy</Link>
            <Link to="/imprint" className="text-doc-gray hover:text-doc-blue transition-colors">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
