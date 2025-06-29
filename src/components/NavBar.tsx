
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import SignupDialog from "@/components/SignupDialog";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLink = (section: string, label: string) => {
    if (isHomePage) {
      return <a href={`#${section}`} className="text-doc-black/80 hover:text-doc-blue transition-colors">{label}</a>;
    } else {
      return <Link to={`/#${section}`} className="text-doc-black/80 hover:text-doc-blue transition-colors">{label}</Link>;
    }
  };

  return (
    <header className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`} style={{ top: 'var(--banner-height, 0)' }}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {getNavLink("features", "Features")}
            {getNavLink("how-it-works", "How it works")}
            {getNavLink("pricing", "Pricing")}
            <Link to="/blog" className="text-doc-black/80 hover:text-doc-blue transition-colors">Blog</Link>
            <Link to="/contact" className="text-doc-black/80 hover:text-doc-blue transition-colors">Contact</Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <SignupDialog 
              trigger={
                <Button 
                  variant="gradient" 
                  className="rounded-lg"
                >
                  Get Demo
                </Button>
              }
            />
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
            {isHomePage ? (
              <>
                <a href="#features" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>How it works</a>
                <a href="#pricing" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
                <Link to="/#how-it-works" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>How it works</Link>
                <Link to="/#pricing" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              </>
            )}
            <Link to="/blog" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <SignupDialog 
                trigger={
                  <Button 
                    variant="gradient" 
                    className="w-full justify-center rounded-lg"
                  >
                    Get Demo
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
