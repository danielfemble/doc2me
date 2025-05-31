
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchPostBySlug, formatDate, type BlogPost } from "@/utils/blogUtils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPostPage = () => {
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

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt || '',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg text-doc-gray">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="gradient">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Doc2Me Blog</title>
        <meta name="description" content={post.excerpt || ''} />
        <meta name="keywords" content={post.tags?.join(', ') || ''} />
        <link rel="canonical" href={`https://doc2me.co/blog/${slug}`} />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        <meta property="og:image" content={post.featured_image || ''} />
        <meta property="og:url" content={`https://doc2me.co/blog/${slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || ''} />
        <meta name="twitter:image" content={post.featured_image || ''} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-28 pb-16">
          <article className="container max-w-4xl mx-auto px-4 md:px-8">
            {/* Back button */}
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="ghost" className="text-doc-blue hover:text-doc-blue-dark">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            {/* Hero image */}
            {post.featured_image && (
              <div className="aspect-video mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article header */}
            <header className="mb-8">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-doc-blue/10 text-doc-blue text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-doc-black">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-doc-gray">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  {post.read_time && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.read_time}</span>
                    </div>
                  )}
                  {post.author && <span>By {post.author}</span>}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleShare}
                  className="text-doc-blue hover:text-doc-blue-dark"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Article content with markdown rendering */}
            <div className="prose prose-lg max-w-none prose-headings:text-doc-black prose-p:text-doc-gray prose-a:text-doc-blue hover:prose-a:text-doc-blue-dark prose-ul:text-doc-gray prose-ol:text-doc-gray prose-strong:text-doc-black prose-em:text-doc-gray prose-blockquote:border-l-doc-blue prose-blockquote:text-doc-gray prose-code:bg-gray-100 prose-code:text-doc-black prose-pre:bg-gray-100">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold mb-4 text-doc-black">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold mb-3 text-doc-black">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold mb-3 text-doc-black">{children}</h3>,
                  h4: ({children}) => <h4 className="text-lg font-semibold mb-2 text-doc-black">{children}</h4>,
                  p: ({children}) => <p className="mb-4 text-doc-gray leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="mb-4 pl-6 space-y-2">{children}</ul>,
                  ol: ({children}) => <ol className="mb-4 pl-6 space-y-2">{children}</ol>,
                  li: ({children}) => <li className="text-doc-gray">{children}</li>,
                  strong: ({children}) => <strong className="font-semibold text-doc-black">{children}</strong>,
                  em: ({children}) => <em className="italic text-doc-gray">{children}</em>,
                  a: ({href, children}) => <a href={href} className="text-doc-blue hover:text-doc-blue-dark underline">{children}</a>,
                  blockquote: ({children}) => <blockquote className="border-l-4 border-doc-blue pl-4 italic text-doc-gray my-4">{children}</blockquote>,
                  code: ({children}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm text-doc-black">{children}</code>,
                  pre: ({children}) => <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">{children}</pre>,
                  img: ({src, alt}) => <img src={src} alt={alt} className="rounded-lg my-4 w-full" />
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Call to action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-doc-blue/5 to-doc-purple/5 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-doc-black">
                Ready to Transform Your Healthcare Documentation?
              </h3>
              <p className="text-doc-gray mb-4">
                Discover how Doc2Me can streamline your medical documentation process.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
