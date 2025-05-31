
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog post data - you can replace this with a CMS or database
const blogPostsData: Record<string, any> = {
  "healthcare-digitalization-2024": {
    title: "The Future of Healthcare Digitalization in 2024",
    excerpt: "Explore how digital transformation is revolutionizing patient care and medical documentation processes in modern healthcare facilities.",
    content: `
      <p>Healthcare digitalization is rapidly transforming the way medical professionals deliver patient care. In 2024, we're seeing unprecedented adoption of digital tools that streamline workflows, improve patient outcomes, and enhance the overall healthcare experience.</p>
      
      <h2>Key Trends Shaping Healthcare Digitalization</h2>
      
      <h3>1. AI-Powered Documentation</h3>
      <p>Artificial intelligence is revolutionizing medical documentation by automatically transcribing patient interactions, extracting key information, and generating comprehensive reports. This technology reduces administrative burden on healthcare providers while improving accuracy and consistency.</p>
      
      <h3>2. Telemedicine Integration</h3>
      <p>The integration of telemedicine platforms with existing healthcare systems has become seamless, allowing for better continuity of care and improved patient access to medical services.</p>
      
      <h3>3. Electronic Health Records Evolution</h3>
      <p>Modern EHR systems are becoming more intuitive and interoperable, enabling better data sharing between healthcare providers and improving coordination of care.</p>
      
      <h2>Benefits for Healthcare Providers</h2>
      <ul>
        <li>Reduced administrative workload</li>
        <li>Improved documentation accuracy</li>
        <li>Enhanced patient care quality</li>
        <li>Better compliance with regulations</li>
        <li>Increased operational efficiency</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As we progress through 2024, the focus on healthcare digitalization will continue to intensify. Healthcare facilities that embrace these technologies will be better positioned to provide superior patient care while maintaining operational efficiency.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
    tags: ["Healthcare", "Digital Transformation", "Technology"],
    author: "Doc2Me Team"
  },
  "ai-medical-documentation": {
    title: "How AI is Transforming Medical Documentation",
    excerpt: "Discover the impact of artificial intelligence on streamlining documentation workflows and improving accuracy in healthcare settings.",
    content: `
      <p>Medical documentation has long been one of the most time-consuming aspects of healthcare delivery. However, artificial intelligence is changing this landscape dramatically, offering solutions that not only save time but also improve the quality and accuracy of medical records.</p>
      
      <h2>The Challenge of Traditional Documentation</h2>
      <p>Healthcare providers spend countless hours on documentation tasks, often sacrificing valuable patient interaction time. Traditional methods are prone to errors, inconsistencies, and delays that can impact patient care quality.</p>
      
      <h2>AI-Powered Solutions</h2>
      
      <h3>Automated Transcription</h3>
      <p>AI-powered transcription services can convert spoken words into text in real-time, allowing healthcare providers to focus on patient care while ensuring comprehensive documentation.</p>
      
      <h3>Natural Language Processing</h3>
      <p>Advanced NLP algorithms can understand medical terminology, extract relevant information, and structure it according to standardized formats, reducing the cognitive load on healthcare providers.</p>
      
      <h3>Predictive Text and Templates</h3>
      <p>AI can suggest relevant text and auto-populate common fields based on the context of the patient encounter, significantly speeding up the documentation process.</p>
      
      <h2>Benefits and Outcomes</h2>
      <ul>
        <li>Reduced documentation time by up to 50%</li>
        <li>Improved accuracy and consistency</li>
        <li>Enhanced compliance with medical standards</li>
        <li>Better patient-provider interaction time</li>
        <li>Reduced burnout among healthcare staff</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>When implementing AI documentation solutions, healthcare facilities should consider factors such as integration with existing systems, staff training requirements, and patient privacy protections.</p>
    `,
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    tags: ["AI", "Medical Documentation", "Efficiency"],
    author: "Doc2Me Team"
  },
  "patient-data-security": {
    title: "Ensuring Patient Data Security in Digital Healthcare",
    excerpt: "Learn about best practices for maintaining HIPAA compliance and protecting sensitive patient information in digital systems.",
    content: `
      <p>As healthcare becomes increasingly digital, protecting patient data has never been more critical. Healthcare organizations must navigate complex regulatory requirements while implementing robust security measures to safeguard sensitive medical information.</p>
      
      <h2>Understanding HIPAA Requirements</h2>
      <p>The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient data. Any healthcare organization that deals with protected health information (PHI) must ensure that all physical, network, and process security measures are in place.</p>
      
      <h2>Key Security Measures</h2>
      
      <h3>Encryption</h3>
      <p>All patient data should be encrypted both in transit and at rest. This ensures that even if data is intercepted or accessed unauthorized, it remains unreadable without the proper decryption keys.</p>
      
      <h3>Access Controls</h3>
      <p>Implement role-based access controls to ensure that staff members can only access the information necessary for their job functions. Regular access reviews should be conducted to maintain security.</p>
      
      <h3>Audit Trails</h3>
      <p>Comprehensive logging and monitoring systems should track all access to patient data, providing a clear audit trail for compliance and security investigations.</p>
      
      <h2>Best Practices for Healthcare Organizations</h2>
      <ul>
        <li>Regular security training for all staff members</li>
        <li>Multi-factor authentication for system access</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Incident response planning and testing</li>
        <li>Vendor risk assessment for third-party services</li>
      </ul>
      
      <h2>The Role of Technology Partners</h2>
      <p>Choosing the right technology partners is crucial for maintaining data security. Healthcare organizations should work with vendors who understand HIPAA requirements and can demonstrate their commitment to security through certifications and compliance audits.</p>
      
      <h2>Conclusion</h2>
      <p>Patient data security is not just a regulatory requirement—it's a fundamental responsibility that healthcare organizations have to their patients. By implementing comprehensive security measures and maintaining a culture of privacy protection, healthcare facilities can confidently embrace digital transformation while keeping patient information safe.</p>
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    tags: ["Security", "HIPAA", "Patient Privacy"],
    author: "Doc2Me Team"
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Doc2Me Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://doc2me.co/blog/${slug}`} />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://doc2me.co/blog/${slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
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
            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article header */}
            <header className="mb-8">
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
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-doc-black">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-doc-gray">
                <div className="flex items-center gap-4">
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
                  <span>By {post.author}</span>
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

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-doc-black prose-p:text-doc-gray prose-a:text-doc-blue hover:prose-a:text-doc-blue-dark prose-ul:text-doc-gray prose-ol:text-doc-gray"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

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

export default BlogPost;
