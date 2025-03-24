
import { useState } from 'react';
import { X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RebrandingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert 
      className="rounded-none border-b border-doc-blue/20 bg-doc-blue-light text-doc-blue py-2 px-4 fixed top-0 left-0 right-0 z-50"
    >
      <AlertDescription className="flex items-center justify-between">
        <div className="text-center w-full font-medium">
          Femble is now Doc<span className="text-doc-blue">2</span>Me
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
