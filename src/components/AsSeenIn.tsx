
const AsSeenIn = () => {
  return (
    <section className="py-8 bg-transparent relative z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-doc-gray font-medium">As seen in</p>
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/d1537b2b-b30a-4f2d-930e-07f9b3fe4e28.png" 
            alt="The New York Times" 
            className="h-16 w-auto object-contain filter brightness-0 opacity-70 hover:opacity-90 transition-opacity duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
