import BootSection from "@/components/home/BootSection";
import HomeCards from "@/components/home/HomeCards";
import SiteFooter from "@/components/layout/SiteFooter";

export default function HomeOverview() {
  return (
    <section className="bg-[#030711] text-white">
        <BootSection />
        <HomeCards />
        <SiteFooter />
    </section>
  );
}