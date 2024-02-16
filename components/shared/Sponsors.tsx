import Image from "next/image";
import { sponsors } from "@/constant/index";

const Sponsors = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full text-center">
          <h2 className="text-3xl">
            More Than{" "}
            <span className="text-orange-500 font-bold">10,000 Companies</span>{" "}
            Trust us
          </h2>
        </div>

        <div className="flex justify-between items-center mt-5 flex-wrap gap-10">
          {sponsors.map((sp) => (
           <Image
           key={sp.name}
             src={sp.source}
             alt={sp.name}
             width={150} 
             height={150}
           />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
