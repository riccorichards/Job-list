import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.jpg')] h-screen relative w-full bg-cover mt-[-72px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black">
            Land The{" "}
            <span className="text-orange-500 font-extrabold">Dream Job</span>,
            You Deserve
          </h1>
          <span className=" text-gray-500 font-bold">
            100,000 jobs listed here! Your dream job is waiting
          </span>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
