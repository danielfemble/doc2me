
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-doc-black/80 hover:text-doc-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-doc-black/80 hover:text-doc-blue transition-colors">How it works</a>
            <a href="#testimonials" className="text-doc-black/80 hover:text-doc-blue transition-colors">Testimonials</a>
            <a href="#faq" className="text-doc-black/80 hover:text-doc-blue transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="rounded-lg">
              Log in
            </Button>
            <Button className="bg-doc-blue hover:bg-doc-blue-dark rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-doc-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-gray-100 animate-fade-in">
            <a href="#features" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>How it works</a>
            <a href="#testimonials" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <Button variant="outline" className="w-full justify-center rounded-lg">
                Log in
              </Button>
              <Button className="w-full justify-center bg-doc-blue hover:bg-doc-blue-dark rounded-lg">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
