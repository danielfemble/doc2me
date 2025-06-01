
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
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

  if (loading) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>Loading... | Doc2Me Blog</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-28 pb-16">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-8 w-1/2"></div>
                <div className="h-64 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
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
          <meta name="robots" content="noindex, nofollow" />
          <title>Post Not Found | Doc2Me Blog</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-28 pb-16">
            <div className="container max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-lg text-doc-gray mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-doc-blue hover:text-doc-blue-dark"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
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
    "publisher": {
      "@type": "Organization",
      "name": "Doc2Me",
      "logo": {
        "@type": "ImageObject",
        "url": "https://doc2me.co/doc2me-logo.png"
      }
    },
    "image": post.featured_image ? [post.featured_image] : ["https://doc2me.co/doc2me-logo.png"]
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Doc2Me Blog</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta name="keywords" content={post.tags?.join(', ') || 'healthcare, patient education, medical information'} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://doc2me.co/blog/${post.slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta property="og:url" content={`https://doc2me.co/blog/${post.slug}`} />
        <meta property="og:site_name" content="Doc2Me Blog" />
        <meta property="og:image" content={post.featured_image || "https://doc2me.co/doc2me-logo.png"} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={post.created_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta property="article:author" content={post.author || "Doc2Me Team"} />
        {post.tags && post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta name="twitter:image" content={post.featured_image || "https://doc2me.co/doc2me-logo.png"} />
        <meta name="twitter:image:alt" content={post.title} />
        
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
          <article className="container max-w-4xl mx-auto px-4 md:px-8">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-doc-black leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-doc-gray mb-6">
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
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
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
              
              {post.featured_image && (
                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-doc-black prose-p:text-doc-gray prose-a:text-doc-blue hover:prose-a:text-doc-blue-dark prose-strong:text-doc-black">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-doc-blue hover:text-doc-blue-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
