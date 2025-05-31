
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

  return (
    <>
      <Helmet>
        <title>Healthcare Blog | Doc2Me - Digital Transformation Insights</title>
        <meta name="description" content="Stay updated with the latest insights on healthcare digitalization, AI in medical documentation, and best practices for modern healthcare facilities." />
        <meta name="keywords" content="healthcare blog, medical documentation, digital transformation, AI healthcare, patient care technology" />
        <link rel="canonical" href="https://doc2me.co/blog" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-28 pb-16">
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
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      {post.featured_image && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.featured_image} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-doc-gray mb-3">
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
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 text-doc-black">
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
                      </div>
                    </article>
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
