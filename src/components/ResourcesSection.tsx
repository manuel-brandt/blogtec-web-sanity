const resources = [
  {
    type: "Case Study",
    title: "Top 3 Positionen für lokalen Kammerjäger",
    href: "/ressourcen/case-study-kammerjaeger",
    color: "bg-orange-100 text-orange-700",
  },
  {
    type: "Guide",
    title: "Wie Agenturen White Label SEO nutzen",
    href: "/ressourcen/white-label-seo-guide",
    color: "bg-blue-100 text-blue-700",
  },
  {
    type: "Case Study",
    title: "+30.000 Besucher für Online Shop",
    href: "/ressourcen/case-study-online-shop",
    color: "bg-orange-100 text-orange-700",
  },
  {
    type: "Video",
    title: "Blogtec Vorstellung für Agenturen",
    href: "/ressourcen/video-agenturen",
    color: "bg-red-100 text-red-700",
  },
  {
    type: "Blog Artikel",
    title: "Guide über GEO und die Zukunft von SEO",
    href: "/ressourcen/geo-seo-guide",
    color: "bg-green-100 text-green-700",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-black text-black text-center mb-12">
          Entdecke unsere Ressourcen
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-[#E9204F] transition-all"
            >
              <span
                className={`inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3 ${resource.color}`}
              >
                {resource.type}
              </span>
              <h3 className="font-bold text-gray-800 text-sm leading-snug mb-3 group-hover:text-[#E9204F] transition-colors">
                {resource.title}
              </h3>
              <span className="text-[#E9204F] text-sm font-medium">
                Mehr erfahren ➜
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
