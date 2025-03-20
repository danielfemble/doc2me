
const ExplanationSection = () => {
  return (
    <div className="mt-16 md:mt-32 relative">
      {/* Gradient overlay to transition from dark to light */}
      <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/5 z-0"></div>
      
      <div className="relative z-10 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
          Physicians Creating Impactful Patient Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0271e5] to-[#0258B6] rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Create High-Quality Content</h3>
            <p className="text-gray-600">Use AI to help craft engaging educational content that patients will actually watch.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-doc-purple-light to-doc-purple rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Personalize for Each Patient</h3>
            <p className="text-gray-600">Tailor your explanations to each patient's specific condition and needs.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0271e5] to-doc-purple rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Share & Measure Impact</h3>
            <p className="text-gray-600">Instantly share videos with patients and track engagement to improve outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection;
