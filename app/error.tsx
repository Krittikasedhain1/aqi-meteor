"use client";

import React from "react";
import Link from "next/link";
import MeterIllustration from "@/components/Icons/MeterIllustration";

function ErrorPage() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col justify-center items-center p-10 pt-5">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-red-400">Oh-nozone!</h1>
        <MeterIllustration color="danger" />
        <p className="text-2xl text-center text-gray-600 mt-5">
          It seems the air is crystal clear, but this page is in a bit of a
          haze.
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

export default ErrorPage;
