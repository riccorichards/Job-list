"use client";

import Link from "next/link";
import { jobType } from "@/types/job.types";
import Image from "next/image";

import fallbackImage from "@/public/fallbackimage.png";

interface JobsCardProps {
  job: jobType;
}

const JobCard = ({ job }: JobsCardProps) => {
  return (
    <Link href={`/job/${job.id}`}>
      <div className="border p-3 rounded-md flex flex-col hover:bg-orange-500 transition duration-700 hover:text-white">
        <div className="flex justify-between">
          <div>
            <Image
              src={job.image ? job.image : fallbackImage}
              height={40}
              width={40}
              alt={`${job.author} logo`}
            />
            <h2 className="text-sm">{job.author}</h2>
          </div>
          <h2>{job.salary}k/year</h2>
        </div>

        <div className="mt-3 text-xl">
          <h3>{job.name}</h3>
          <p>{job.location}</p>
          <span
            className="bg-orange-500 text-xs rounded-md p-1.5
           text-white"
          >
            {job.workType}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
