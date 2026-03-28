import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-0 w-screen h-screen">
      <HeroSection />
    </div>
  );
}
