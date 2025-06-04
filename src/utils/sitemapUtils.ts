
import { fetchAllPosts } from './blogUtils';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = async (): Promise<string> => {
  const baseUrl = 'https://doc2me.co';
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/utility-pages/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/delete-account-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/imprint`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  // Fetch blog posts
  let blogPages: SitemapUrl[] = [];
  try {
    const posts = await fetchAllPosts();
    blogPages = posts
      .filter(post => post.published && post.slug)
      .map(post => ({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: post.updated_at || post.created_at,
        changefreq: 'monthly' as const,
        priority: 0.7
      }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  const allPages = [...staticPages, ...blogPages];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return xml;
};
