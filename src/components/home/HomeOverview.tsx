import BootSection from "@/components/home/BootSection";
import HomeCards from "@/components/home/HomeCards";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomeOverview() {
  return (
    <section className="bg-[#030711] text-white">
        <BootSection />
        <HomeCards />
        <HomeFooter />
    </section>
  );
}