import { client } from "@/sanity/client";
import { homepageQuery } from "@/sanity/queries";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import LinkCenterSection from "@/components/LinkCenterSection";
import OutsourcingSection from "@/components/OutsourcingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  const data = await client.fetch(homepageQuery).catch(() => null);

  return (
    <main>
      <AnnouncementBar data={data?.announcementBar} />
      <Navbar />
      <HeroSection data={data?.hero} />
      <LogoBar />
      <StatsBar data={data?.stats} />
      <ServicesSection data={data?.services} />
      <LinkCenterSection />
      <OutsourcingSection />
      <CtaSection data={data?.cta} />
      <TestimonialsSection data={data?.testimonials} />
      <ResourcesSection data={data?.resources} />
      <Footer />
    </main>
  );
}
