import MeterIllustration from "@/components/Icons/MeterIllustration";
import Search from "@/components/Search";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen bg-green-300 flex flex-col justify-center items-center p-10">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-red-400">Uh-oh!</h1>
        <MeterIllustration />
        <p className="text-2xl text-gray-600 mt-5">
          The air you're breathing is clear, but this page isn't.
        </p>
        <p className="text-xl text-gray-500 mt-5">
          Here are some things you can try to improve your digital air quality:
        </p>
        <ul className="list-disc mt-5 text-gray-600">
          <Link
            href="/"
            className="rounded-full block  text-yellow-100 bg-green-500 hover:bg-yellow-100 hover:text-green-500 shadow-2xl hover:shadow-inner transition-all duration-150	 font-bold py-5 px-10"
          >
            Back to Home
          </Link>
          .
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
