import Search from "@/components/Search";
import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen bg-green-300 flex flex-col justify-center items-center p-10">
      <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
      <p className="text-2xl text-gray-600 mt-5">
        The page you&apos;re looking for could not be found.
      </p>
      <p className="text-xl text-gray-500 mt-5">
        Here are some things you can try:
      </p>
      <ul className="list-disc mt-5 text-gray-600">
        <li>
          Go back to the <a href="/">homepage</a>.
        </li>
        <li>Check the URL for any errors.</li>
        <li>Try searching for the content you&apos;re looking for.</li>
        <Search />
      </ul>
    </div>
  );
}

export default NotFound;
