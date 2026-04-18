import { Nav } from "@/components/nav";
import { Billboard } from "@/components/billboard";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Voice } from "@/components/voice";
import { Honors } from "@/components/honors";
import { Foundations } from "@/components/foundations";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Billboard />
        <div className="relative z-10 -mt-[12vh]">
          <About />
          <Experience />
          <Work />
          <Voice />
          <Honors />
          <Foundations />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
