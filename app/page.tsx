import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({});
  return (
    <div>
      <Hero jobs={jobs} />
      <Jobs/>
    </div>
  );
}
