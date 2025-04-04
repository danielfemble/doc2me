
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useIsMobile } from '@/hooks/use-mobile';

const RebrandingBanner = () => {
  // Always set to false to ensure this never appears
  const [isVisible, setIsVisible] = useState(false);
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

  // Return null to ensure this component never renders
  return null;
};

export default RebrandingBanner;
