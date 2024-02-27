import Button from "@/components/ui/Button";
import { formatPostedDate } from "@/utils/formatPostedDate";

interface DynamicProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const res = await fetch(`https://job-list-mocha.vercel.app/api/post/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const page = async ({ params }: DynamicProps) => {
  const { id } = params;
  const job = await getData(id);
  const formattedPostedDate = formatPostedDate(job.createdAt);
  return (
    <>
      <div className="bg-[url('/hero.jpg')] h-fit relative w-full bg-cover mt-[-70px] py-28">
        <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
          <div className="flex flex-col gap-15">
            <h1 className="text-orange-500 font-bold text-4xl">{job.name}</h1>
            <p>{job.description}</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto max-w-[1450px] py-20">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-4 md:col-span-6">
            <div className="shadow rounded-md bg-white sticky top-20">
              <div className="p-6">
                <h5 className="text-lg font-semibold">Job Information</h5>
                <div className="p-6 border-t border-slate-100">
                  <ul>
                    <li>
                      <div>
                        <p>Employment Type:</p>
                        <span className="font-medium">{job.workType}</span>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div>
                        <p>Company:</p>
                        <span className="font-medium">{job.author}</span>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div>
                        <p>Location:</p>
                        <span className="font-medium">{job.location}</span>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div>
                        <p>Salary:</p>
                        <span className="font-medium">{job.salary}k/year</span>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div>
                        <p>Posted</p>
                        <span className="font-medium">
                          {formattedPostedDate}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 md:col-span-6">
            <h5 className="text-lg font-semibold">Job Description:</h5>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>
            <p className="mt-4 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium autem facere molestiae, impedit nobis quis architecto
              illo ipsam! Fugit libero error dolorem obcaecati voluptatem
              assumenda voluptates dicta molestias excepturi?
            </p>

            <div className="mt-4">
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
