
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import DeleteAccountPolicy from "@/pages/DeleteAccountPolicy";
import Contact from "@/pages/Contact";
import Imprint from "@/pages/Imprint";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import RebrandingBanner from "@/components/RebrandingBanner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <RebrandingBanner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/utility-pages/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Keep old route for backward compatibility */}
          <Route path="/delete-account-policy" element={<DeleteAccountPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
