
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog posts - you can replace these with actual content
const blogPosts = [
  {
    id: "healthcare-digitalization-2024",
    title: "The Future of Healthcare Digitalization in 2024",
    excerpt: "Explore how digital transformation is revolutionizing patient care and medical documentation processes in modern healthcare facilities.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
    tags: ["Healthcare", "Digital Transformation", "Technology"]
  },
  {
    id: "ai-medical-documentation",
    title: "How AI is Transforming Medical Documentation",
    excerpt: "Discover the impact of artificial intelligence on streamlining documentation workflows and improving accuracy in healthcare settings.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    tags: ["AI", "Medical Documentation", "Efficiency"]
  },
  {
    id: "patient-data-security",
    title: "Ensuring Patient Data Security in Digital Healthcare",
    excerpt: "Learn about best practices for maintaining HIPAA compliance and protecting sensitive patient information in digital systems.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    tags: ["Security", "HIPAA", "Patient Privacy"]
  }
];

const Blog = () => {
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

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-doc-gray mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-doc-black hover:text-doc-blue transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-doc-gray mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
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
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" className="p-0 h-auto text-doc-blue hover:text-doc-blue-dark">
                        Read More 
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-doc-gray mb-4">
                Want to stay updated with our latest insights?
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Subscribe to Updates
                </Button>
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
