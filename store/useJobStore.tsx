import { create } from "zustand";
import { jobType } from "@/types/job.types";

interface JobStoreState {
  filteredJobs: jobType[];
  setFilteredJobs: (jobs: jobType[]) => void;
}

const useJobStore = create<JobStoreState>((set) => ({
  filteredJobs: [],
  setFilteredJobs: (jobs) => set({ filteredJobs: jobs }),
}));

export default useJobStore;
