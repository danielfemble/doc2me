
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  useEffect(() => {
    // Load Iubenda script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (w,d) {
        var loader = function () {
          var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
          s.src="https://cdn.iubenda.com/iubenda.js"; 
          tag.parentNode.insertBefore(s,tag);
        }; 
        if(w.addEventListener){
          w.addEventListener("load", loader, false);
        } else if(w.attachEvent){
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | Doc2Me</title>
      </Helmet>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <a 
          href="https://www.iubenda.com/privacy-policy/92059710" 
          className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
          title="Datenschutzerklärung"
        >
          Datenschutzerklärung
        </a>
      </div>
    </>
  );
};

export default Privacy;
