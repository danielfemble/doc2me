
const AsSeenIn = () => {
  const publications = [
    {
      name: "The New York Times",
      logo: "/placeholder.svg", // Replace with actual logo path
      width: "160",
      height: "40"
    },
    {
      name: "Brutkasten",
      logo: "/placeholder.svg", // Replace with actual logo path
      width: "140",
      height: "35"
    },
    {
      name: "Trend.",
      logo: "/placeholder.svg", // Replace with actual logo path
      width: "120",
      height: "35"
    },
    {
      name: "Startup Valley News",
      logo: "/placeholder.svg", // Replace with actual logo path
      width: "150",
      height: "40"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-doc-gray/70 uppercase tracking-wide mb-6">
            As Seen In
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={publication.logo}
                alt={publication.name}
                width={publication.width}
                height={publication.height}
                className="max-h-8 md:max-h-10 w-auto object-contain filter brightness-0 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
