"use client";

import { useState } from "react";

const tabs = ["Pakete", "Content", "SEO", "Backlinks & PR", "Design & Tech"];

const services: Record<string, { title: string; href: string }[]> = {
  Pakete: [
    { title: "Monatliches SEO", href: "/leistungen/seo-paket" },
    { title: "Monatliche Google-Ads", href: "/leistungen/google-ads" },
    { title: "Monatliche SEO-Texte", href: "/leistungen/seo-texte-paket" },
    { title: "Monatliche Backlinks", href: "/leistungen/backlinks-paket" },
  ],
  Content: [
    { title: "SEO-Texte", href: "/leistungen/seo-texte" },
    { title: "SEO-Übersetzung", href: "/leistungen/uebersetzung" },
    { title: "Content-Optimierung", href: "/leistungen/content-optimierung" },
  ],
  SEO: [
    { title: "SEO & GEO Audit", href: "/leistungen/seo-audit" },
    { title: "Technisches SEO", href: "/leistungen/technisches-seo" },
    { title: "Keyword-Recherche", href: "/leistungen/keyword-recherche" },
    { title: "Content-Plan", href: "/leistungen/content-plan" },
  ],
  "Backlinks & PR": [
    { title: "Link Center", href: "/link-center" },
    { title: "Unternehmensverzeichnisse", href: "/leistungen/verzeichnisse" },
    { title: "Pressemitteilung", href: "/leistungen/pressemitteilung" },
    { title: "Community-Links", href: "/leistungen/community-links" },
  ],
  "Design & Tech": [
    { title: "Website-Design", href: "/leistungen/website-design" },
    { title: "Design zu Website", href: "/leistungen/design-zu-website" },
    { title: "Individuelle Projekte", href: "/leistungen/individuelle-projekte" },
  ],
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Pakete");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-black text-black text-center mb-10">
          Wir bieten eine Vielzahl an Leistungen
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-pill text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services[activeTab]?.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-[#E9204F] hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 group-hover:text-[#E9204F] transition-colors">
                  {service.title}
                </p>
                <span className="text-gray-400 group-hover:text-[#E9204F] transition-colors text-lg">→</span>
              </div>
              <p className="text-sm text-[#E9204F] font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Mehr erfahren
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
