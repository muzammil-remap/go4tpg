import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { OpeningQuestion } from "@/components/sections/OpeningQuestion";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Offers } from "@/components/sections/Offers";
import { CostOfWaiting } from "@/components/sections/CostOfWaiting";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <OpeningQuestion />
        <BeforeAfter />
        <HowWeWork />
        <Offers />
        <CostOfWaiting />
      </main>
      <Footer />
    </div>
  );
}
