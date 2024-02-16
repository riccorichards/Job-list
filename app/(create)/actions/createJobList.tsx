"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface FormData {
  name: string;
  image: string;
  author: string;
  salary: string;
  location: string;
  description: string;
  workType: string;
}

export const createJob = async (data: FormData) => {
  await prisma.job.create({
    data: {
      name: data.name,
      image: data.image,
      author: data.author,
      salary: parseFloat(data.salary),
      location: data.location,
      description: data.description,
      workType: data.workType,
    },
  });

  revalidatePath("/create");
};
