import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CourseSection } from "@/components/CourseSection";
import { KiwamiSection } from "@/components/KiwamiSection";
import { FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CourseSection />
        <KiwamiSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
