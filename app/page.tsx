import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import NFTSection from '@/components/NFTSection';
import RoadmapSection from '@/components/RoadmapSection';
import FAQSection from '@/components/FAQSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <main>
        <HomeSection />
        <NFTSection id="nft" />
        <RoadmapSection id="roadmap" />
        <FAQSection id="faq" />
        <AboutSection id="about" />
      </main>
    </div>
  );
}