export interface jobType {
  id: string;
  name: string;
  image: string | null;
  author: string;
  salary: number | null;
  location: string;
  description: string;
  workType: string | null;
  createdAt: Date;
}
