
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchPostBySlug, formatDate, type BlogPost } from "@/utils/blogUtils";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const postData = await fetchPostBySlug(slug);
        if (postData) {
          setPost(postData);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const shareUrl = `https://doc2me.co/blog/${slug}`;
  const shareText = post ? `Check out this article: ${post.title}` : '';

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    
    let shareLink = '';
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-28 pb-16">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
              <div className="text-center py-12">
                <div className="text-lg text-doc-gray">Loading blog post...</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | Doc2Me</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-28 pb-16">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-doc-black mb-4">Blog Post Not Found</h1>
                <p className="text-doc-gray mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || `Read ${post.title} on the Doc2Me blog.`,
    "image": post.featured_image ? [post.featured_image] : [],
    "datePublished": post.created_at,
    "dateModified": post.updated_at,
    "author": {
      "@type": "Organization",
      "name": post.author || "Doc2Me Team",
      "url": "https://doc2me.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Doc2Me",
      "logo": {
        "@type": "ImageObject",
        "url": "https://doc2me.co/doc2me-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://doc2me.co/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || 'healthcare blog, medical documentation',
    "articleSection": "Healthcare Technology",
    "wordCount": post.content.split(' ').length
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Doc2Me Blog</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta name="keywords" content={post.tags?.join(', ') || 'healthcare blog, medical documentation'} />
        <meta name="author" content={post.author || 'Doc2Me Team'} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://doc2me.co/blog/${post.slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta property="og:url" content={`https://doc2me.co/blog/${post.slug}`} />
        <meta property="og:site_name" content="Doc2Me Blog" />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        {post.featured_image && <meta property="og:image:alt" content={post.title} />}
        <meta property="article:published_time" content={post.created_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta property="article:author" content={post.author || 'Doc2Me Team'} />
        <meta property="article:section" content="Healthcare Technology" />
        {post.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        {post.featured_image && <meta name="twitter:image" content={post.featured_image} />}
        {post.featured_image && <meta name="twitter:image:alt" content={post.title} />}
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        {/* Breadcrumb Navigation */}
        <nav className="pt-28 pb-4" aria-label="Breadcrumb">
          <div className="container max-w-4xl mx-auto px-4 md:px-8">
            <ol className="flex items-center space-x-2 text-sm text-doc-gray">
              <li><Link to="/" className="hover:text-doc-blue">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/blog" className="hover:text-doc-blue">Blog</Link></li>
              <li><span>/</span></li>
              <li className="text-doc-black font-medium truncate">{post.title}</li>
            </ol>
          </div>
        </nav>
        
        <main className="flex-grow pb-16">
          <div className="container max-w-4xl mx-auto px-4 md:px-8">
            {/* Back to Blog Link */}
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-doc-blue hover:text-doc-blue-dark transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-doc-gray mb-4">
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
                {post.author && (
                  <div>
                    <span>By {post.author}</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-doc-black">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-lg text-doc-gray mb-6">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-doc-blue/10 text-doc-blue text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Social Share Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-doc-gray mr-2">Share:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="p-2"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="p-2"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="p-2"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-doc-black prose-p:text-doc-black prose-p:leading-relaxed prose-li:text-doc-black prose-strong:text-doc-black prose-a:text-doc-blue hover:prose-a:text-doc-blue-dark prose-blockquote:border-l-doc-blue prose-blockquote:bg-gray-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-4 leading-relaxed text-doc-black">{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-doc-black">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-doc-black">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-doc-black">{children}</h3>,
                  ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-4 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-doc-black leading-relaxed">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-doc-blue bg-gray-50 pl-6 py-4 my-6 italic text-doc-black">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-doc-black">{children}</strong>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-doc-blue hover:text-doc-blue-dark underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <img 
                      src={src} 
                      alt={alt || ''} 
                      className="w-full rounded-lg my-6"
                      loading="lazy"
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
