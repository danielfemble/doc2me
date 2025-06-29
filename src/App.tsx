
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Privacy from "@/pages/Privacy";
import DeleteAccountPolicy from "@/pages/DeleteAccountPolicy";
import Contact from "@/pages/Contact";
import Imprint from "@/pages/Imprint";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogAdmin from "@/pages/BlogAdmin";
import Login from "@/pages/Login";
import RebrandingBanner from "@/components/RebrandingBanner";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors />
      <RebrandingBanner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/utility-pages/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Keep old route for backward compatibility */}
          <Route path="/delete-account-policy" element={<DeleteAccountPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route 
            path="/admin/blog" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <BlogAdmin />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
