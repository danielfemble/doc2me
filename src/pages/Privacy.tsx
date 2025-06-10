
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    // Immediately redirect to Iubenda privacy policy
    window.location.href = 'https://www.iubenda.com/privacy-policy/92059710';
  }, []);

  // Show a brief loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-doc-blue mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Privacy Policy...</p>
      </div>
    </div>
  );
};

export default Privacy;
