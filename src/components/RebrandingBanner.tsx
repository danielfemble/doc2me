
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useIsMobile } from '@/hooks/use-mobile';

const RebrandingBanner = () => {
  const [isVisible, setIsVisible] = useState(false); // Set to false to hide the banner completely
  const [bannerHeight, setBannerHeight] = useState(0);
  const isMobile = useIsMobile();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && isVisible) {
      setBannerHeight(bannerRef.current.offsetHeight);
      // Add event listener for window resize to update banner height
      const handleResize = () => {
        if (bannerRef.current) {
          setBannerHeight(bannerRef.current.offsetHeight);
        }
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } else {
      setBannerHeight(0);
    }
  }, [isVisible]);

  // Expose banner height via CSS variable for other components to use
  useEffect(() => {
    document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
  }, [bannerHeight]);

  if (!isVisible) return null;

  return (
    <Alert 
      ref={bannerRef}
      className="rounded-none border-b border-doc-blue/20 bg-doc-blue-light text-doc-blue py-2 px-4 fixed top-0 left-0 right-0 z-50"
    >
      <AlertDescription className="flex items-center justify-between">
        <div className="text-center w-full font-medium">
          Welcome to Doc<span className="text-doc-blue">2</span>Me
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-doc-blue/70 hover:text-doc-blue transition-colors"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </AlertDescription>
    </Alert>
  );
};

export default RebrandingBanner;
