import BootIntro from "@/components/home/BootIntro";
import HomeOverview from "@/components/home/HomeOverview";
import SiteNavigation from "@/components/layout/SiteNavigation";

export default function HomePage() {
  return (
    <main>
      <SiteNavigation />
      <BootIntro />
      <HomeOverview />
    </main>
  );
}