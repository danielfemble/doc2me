
import { Footer } from "@/components";

const DeleteAccountPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#0271e5]/10 to-white/90 min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-doc-black tracking-tight">
              Doc<span className="text-doc-blue">2</span>Me
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-doc-black">Delete Account Policy for Femble App</h1>
          
          <div className="mb-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Option 1: Delete yourself</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Go to profile settings in the right top corner</li>
                <li>Go to the very bottom and find the button "delete account"</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Option 2: Write us an E-Mail</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  You can write us an email via{' '}
                  <a href="mailto:support@doc2me.co" className="text-doc-blue hover:underline">
                    support@doc2me.co
                  </a>{' '}
                  and we are happy to help you delete your Femble app account.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Warning:</strong> Deleting your Femble app account is permanent and cannot be undone. 
              All your data will be removed from our systems.
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-gray-600">
            <p>
              If you have any questions about deleting your Femble app account, please contact us at{' '}
              <a href="mailto:support@doc2me.co" className="text-doc-blue hover:underline">
                support@doc2me.co
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
