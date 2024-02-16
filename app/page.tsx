import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import Sponsors from "@/components/shared/Sponsors";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({});
  return (
    <div>
      <Hero jobs={jobs} />
      <Jobs />
      <Sponsors />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
