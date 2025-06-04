
import { useEffect, useState } from 'react';
import { generateSitemap } from '@/utils/sitemapUtils';

const Sitemap = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSitemap = async () => {
      try {
        const xml = await generateSitemap();
        setSitemapContent(xml);
      } catch (error) {
        console.error('Error generating sitemap:', error);
        setSitemapContent('Error generating sitemap');
      } finally {
        setLoading(false);
      }
    };

    loadSitemap();

    // Set proper content type for XML
    document.documentElement.setAttribute('data-content-type', 'application/xml');
    
    return () => {
      document.documentElement.removeAttribute('data-content-type');
    };
  }, []);

  if (loading) {
    return <div>Generating sitemap...</div>;
  }

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '12px' }}>
      {sitemapContent}
    </div>
  );
};

export default Sitemap;
