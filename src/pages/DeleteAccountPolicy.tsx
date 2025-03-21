
import { Footer } from "@/components";

const DeleteAccountPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ed]">
      <main className="flex-grow container mx-auto px-4 py-8 pt-16">
        <div className="mb-8">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-doc-black">Delete Account Policy</h1>
          
          <div className="mb-16">
            <h2 className="text-5xl font-semibold mb-8 text-doc-black">Option 1: Delete it yourself</h2>
            
            <p className="text-xl mb-6 text-doc-black">01 Go onto your profile Settings</p>
            <div className="mb-10 flex justify-center">
              <img 
                src="/lovable-uploads/a636f175-e9ce-4bb9-ba7d-69ae981a6842.png" 
                alt="Profile settings screenshot showing the menu button" 
                className="max-w-sm rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <p className="text-xl mb-6 text-doc-black">02 Find delete account on the bottom of your settings</p>
            <div className="mb-10 flex justify-center">
              <img 
                src="/lovable-uploads/f21e99dc-1ee0-4570-9102-ecb5e145e75b.png" 
                alt="Settings page screenshot showing the delete account option" 
                className="max-w-sm rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-5xl font-semibold mb-8 text-doc-black">Option 2: Send an E-Mail</h2>
            
            <p className="text-xl text-doc-black">Write an E-Mail to: <a href="mailto:support@doc2me.com" className="text-doc-blue hover:underline">support@doc2me.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccountPolicy;
