import BootIntro from "@/components/home/BootIntro";
import HomeOverview from "@/components/home/HomeOverview";
import HomeNavigation from "@/components/home/HomeNavigation";

export default function HomePage() {
  return (
    <main>
      <HomeNavigation />
      <BootIntro />
      <HomeOverview />
    </main>
  );
}