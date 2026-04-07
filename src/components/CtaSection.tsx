import Link from "next/link";

const highlights = [
  "Erhalte Backlinks, Content oder andere Leistungen – ohne dein Team vergrößern zu müssen.",
  "Flexible Einzelleistungen und Pakete.",
  "Verwalteter SEO-Service schon ab 500 €/Monat.",
  "Bewährte Resultate in verschiedensten Branchen.",
];

export default function CtaSection() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-black mb-4">
          Erziele Ergebnisse, ohne zusätzliches Personal einzustellen
        </h2>
        <ul className="space-y-2 my-8 text-left max-w-xl mx-auto">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="text-[#F9E90A] mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/beratung"
          className="inline-block bg-[#E9204F] text-white rounded-pill px-8 py-4 font-bold uppercase tracking-wide text-sm hover:bg-[#d01a44] transition-colors"
        >
          KOSTENLOSE BERATUNG BUCHEN
        </Link>
      </div>
    </section>
  );
}
