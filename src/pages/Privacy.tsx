
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  useEffect(() => {
    // Redirect to Iubenda privacy policy
    window.location.href = 'https://www.iubenda.com/privacy-policy/92059710';
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Privacy Policy | Doc2Me</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Redirecting to Privacy Policy...</h1>
          <p className="text-gray-600">
            If you are not redirected automatically, 
            <a href="https://www.iubenda.com/privacy-policy/92059710" className="text-doc-blue hover:underline ml-1">
              click here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
