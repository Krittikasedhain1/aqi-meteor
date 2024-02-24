import Link from "next/link";
import { Suspense } from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="container gap-10 md:flex-row flex-col mx-auto px-4 pt-4  flex justify-between items-center">
      <Link
        href="/"
        className="cursor-pointer w-max flex flex-col align-center"
      >
        <h1 className="text-4xl font-normal ">AQI</h1>
        <span className="text-xs font-light">weather forecast</span>
      </Link>
      <Suspense
        fallback={
          <div className="flex justify-center items-center text-white h-[60px] bg-gray-200 rounded relative mt-1 md:w-[50%] w-full "></div>
        }
      >
        <Search />
      </Suspense>
    </div>
  );
};

export default Header;
