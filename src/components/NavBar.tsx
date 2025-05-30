
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SignupDialog } from "@/components/index";
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSignup = () => {
    setSignupOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

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
            {getNavLink("features", t('nav.features'))}
            {getNavLink("how-it-works", t('nav.howItWorks'))}
            {getNavLink("pricing", t('nav.pricing'))}
            <Link to="/contact" className="text-doc-black/80 hover:text-doc-blue transition-colors">{t('nav.contact')}</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <SignupDialog 
              trigger={
                <Button variant="gradient" className="rounded-lg">
                  {t('nav.requestDemo')}
                </Button>
              }
              defaultOpen={signupOpen}
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
                <a href="#features" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</a>
                <a href="#how-it-works" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.howItWorks')}</a>
                <a href="#pricing" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.pricing')}</a>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</Link>
                <Link to="/#how-it-works" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.howItWorks')}</Link>
                <Link to="/#pricing" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.pricing')}</Link>
              </>
            )}
            <Link to="/contact" className="text-doc-black/80 hover:text-doc-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <div className="flex justify-center mb-2">
                <LanguageSwitcher />
              </div>
              <SignupDialog 
                trigger={
                  <Button variant="gradient" className="w-full justify-center rounded-lg">
                    {t('nav.requestDemo')}
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
