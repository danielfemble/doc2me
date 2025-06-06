

const AsSeenIn = () => {
  const publications = [{
    name: "The New York Times",
    logo: "/lovable-uploads/92f357f4-712d-4db0-84a3-5f4706fdca0e.png",
    width: "500",
    height: "125"
  }, {
    name: "Brutkasten",
    logo: "/lovable-uploads/7a8be68d-e501-4da2-a9e1-abd755357380.png",
    width: "350",
    height: "90"
  }, {
    name: "Trend.",
    logo: "/lovable-uploads/bb63ec52-b820-4a03-83ea-87530c7f8724.png",
    width: "320",
    height: "90"
  }, {
    name: "Startup Valley News",
    logo: "/lovable-uploads/98c1f120-7d15-455d-8340-6d05f99eb443.png",
    width: "380",
    height: "100"
  }];

  // Duplicate the publications array for seamless scrolling
  const duplicatedPublications = [...publications, ...publications];
  return <section className="py-8 bg-transparent relative z-10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-[scroll_10s_linear_infinite] whitespace-nowrap">
          {duplicatedPublications.map((publication, index) => <div key={index} className="flex items-center justify-center mx-16 flex-shrink-0">
              <img src={publication.logo} alt={publication.name} width={publication.width} height={publication.height} className="max-h-40 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity duration-300" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default AsSeenIn;

