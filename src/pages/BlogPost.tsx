
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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

  return (
    <>
      <Helmet>
        <title>{post.title} | Doc2Me Blog</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on the Doc2Me blog.`} />
        <meta name="keywords" content={post.tags?.join(', ') || 'healthcare blog, medical documentation'} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://doc2me.co/blog/${post.slug}`} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-28 pb-16">
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
                />
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-doc-gray mb-4">
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
            </header>

            {/* Article Content */}
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-doc-black prose-p:text-doc-gray prose-p:leading-relaxed prose-li:text-doc-gray prose-strong:text-doc-black prose-a:text-doc-blue hover:prose-a:text-doc-blue-dark prose-blockquote:border-l-doc-blue prose-blockquote:bg-gray-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-doc-black">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-doc-black">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-doc-black">{children}</h3>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-doc-gray">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-doc-blue bg-gray-50 pl-6 py-4 my-6 italic">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-doc-black">{children}</strong>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-doc-blue hover:text-doc-blue-dark underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
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
