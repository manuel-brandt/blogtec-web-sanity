import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1A1A1A] text-white text-center py-3 px-4 flex items-center justify-center gap-3 text-sm">
      <span className="text-[#F9E90A]">🔗</span>
      <span>Kaufe Backlinks günstiger denn je mit unserem Link Center</span>
      <Link
        href="#link-center"
        className="bg-[#F9E90A] text-black font-bold px-4 py-1.5 rounded-pill text-xs uppercase tracking-wide hover:bg-yellow-300 transition-colors whitespace-nowrap"
      >
        MEHR ERFAHREN
      </Link>
    </div>
  );
}
