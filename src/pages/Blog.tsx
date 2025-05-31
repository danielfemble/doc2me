
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchPublishedPosts, formatDate, type BlogPost } from "@/utils/blogUtils";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchPublishedPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Doc2Me Blog",
    "description": "Stay updated with the latest insights on healthcare digitalization, AI in medical documentation, and best practices for modern healthcare facilities.",
    "url": "https://doc2me.co/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Doc2Me",
      "logo": {
        "@type": "ImageObject",
        "url": "https://doc2me.co/doc2me-logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || `Read ${post.title} on the Doc2Me blog.`,
      "url": `https://doc2me.co/blog/${post.slug}`,
      "datePublished": post.created_at,
      "dateModified": post.updated_at,
      "author": {
        "@type": "Organization",
        "name": post.author || "Doc2Me Team"
      },
      "image": post.featured_image ? [post.featured_image] : []
    }))
  };

  return (
    <>
      <Helmet>
        <title>Healthcare Blog | Doc2Me - Digital Transformation Insights</title>
        <meta name="description" content="Stay updated with the latest insights on healthcare digitalization, AI in medical documentation, and best practices for modern healthcare facilities." />
        <meta name="keywords" content="healthcare blog, medical documentation, digital transformation, AI healthcare, patient care technology, healthcare digitalization, medical AI, healthcare innovation" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://doc2me.co/blog" />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Blog | Doc2Me - Digital Transformation Insights" />
        <meta property="og:description" content="Stay updated with the latest insights on healthcare digitalization, AI in medical documentation, and best practices for modern healthcare facilities." />
        <meta property="og:url" content="https://doc2me.co/blog" />
        <meta property="og:site_name" content="Doc2Me" />
        <meta property="og:image" content="https://doc2me.co/doc2me-logo.png" />
        <meta property="og:image:alt" content="Doc2Me Healthcare Blog" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Blog | Doc2Me - Digital Transformation Insights" />
        <meta name="twitter:description" content="Stay updated with the latest insights on healthcare digitalization, AI in medical documentation, and best practices for modern healthcare facilities." />
        <meta name="twitter:image" content="https://doc2me.co/doc2me-logo.png" />
        <meta name="twitter:image:alt" content="Doc2Me Healthcare Blog" />
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="Doc2Me Blog" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        {/* Breadcrumb Navigation */}
        <nav className="pt-28 pb-4" aria-label="Breadcrumb">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <ol className="flex items-center space-x-2 text-sm text-doc-gray">
              <li><Link to="/" className="hover:text-doc-blue">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-doc-black font-medium">Blog</li>
            </ol>
          </div>
        </nav>
        
        <main className="flex-grow pb-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            {/* Hero Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-doc-black">
                Healthcare Insights & Updates
              </h1>
              <p className="text-lg text-doc-gray mb-8">
                Stay informed with the latest trends in healthcare digitalization, 
                AI-powered documentation, and best practices for modern medical facilities.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="text-lg text-doc-gray">Loading blog posts...</div>
              </div>
            ) : (
              <>
                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {blogPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      to={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                        {post.featured_image && (
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={post.featured_image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-doc-gray mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                            </div>
                            {post.read_time && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.read_time}</span>
                              </div>
                            )}
                          </div>
                          
                          <h2 className="text-xl font-semibold mb-3 text-doc-black group-hover:text-doc-blue transition-colors">
                            {post.title}
                          </h2>
                          
                          {post.excerpt && (
                            <p className="text-doc-gray mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-2 py-1 bg-doc-blue/10 text-doc-blue text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center text-doc-blue font-medium text-sm">
                            Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {blogPosts.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-lg text-doc-gray mb-4">No blog posts published yet.</div>
                    <p className="text-doc-gray">Check back soon for our latest insights!</p>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
