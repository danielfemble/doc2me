
import { Footer } from "@/components";

const DeleteAccountPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ed]">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-doc-black">Delete Account Policy</h1>
          
          <p className="mb-6">
            Follow these steps to delete your Doc2Me account:
          </p>
          
          <div className="mb-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 1: Access your account settings</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4">
                <img 
                  src="/lovable-uploads/a636f175-e9ce-4bb9-ba7d-69ae981a6842.png" 
                  alt="Step 1: Access account settings" 
                  className="w-full object-contain"
                />
              </div>
              <p className="text-gray-700">
                Navigate to your account settings by clicking on your profile picture in the top right corner.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 2: Delete your account</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4">
                <img 
                  src="/lovable-uploads/aeff4df8-b14d-4ad8-bd87-69d32ece5428.png" 
                  alt="Step 2: Delete your account" 
                  className="w-full object-contain"
                />
              </div>
              <p className="text-gray-700">
                Scroll to the bottom of the account settings page and click on "Delete Account". 
                Confirm your choice in the popup dialog.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Warning:</strong> Deleting your account is permanent and cannot be undone. 
              All your data will be removed from our systems.
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-gray-600">
            <p>
              If you have any questions about deleting your account, please contact us at{' '}
              <a href="mailto:support@doc2me.com" className="text-doc-blue hover:underline">
                support@doc2me.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccountPolicy;
