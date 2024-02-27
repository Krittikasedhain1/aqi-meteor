import { Suspense } from "react";
import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AQI Meteor - weather forcast",
  description:
    "Stay informed about the air you breathe. Monitor the Air Quality Index(AQI) in your area and take necessary precautions to safeguard your health.",
};

export default function page() {
  return (
    <main className="min-h-screen text-black  bg-green-300">
      <Header />
      <div className="mt-10 md:mt-20 container px-10 flex flex-col gap-8 justify-center items-center m-auto max-w-4xl">
        <svg
          className="h-[200px] w-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <path
            d="M12 22c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10z"
            fill="#4CAF50"
            opacity="0.2"
          />

          <path
            d="M12 22c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5-7.5 3.36-7.5 7.5 3.36 7.5 7.5 7.5z"
            fill="#ffc107"
            opacity="0.2"
          />

          <path
            d="M12 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z"
            fill="#ff9800"
            opacity="0.2"
          />

          <path
            d="M12 22c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z"
            fill="#f44336"
            opacity="0.2"
          />

          <path
            d="M12 17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.76-5-5-5z"
            fill="#4CAF50"
          />
          <path
            d="M10 15.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 1 2 2-1.1 2-2 2z"
            fill="#fff"
          />

          <path
            d="M12 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill="#ffc107"
          />
          <path d="M9 13c-0.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1z" fill="#fff" />

          <path
            d="M12 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            fill="#ff9800"
          />
          <path d="M10 10c-0.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1z" fill="#fff" />

          <path
            d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill="#f44336"
          />
        </svg>
        <h1 className="text-5xl font-bold text-center">
          <span className="text-red-500 "> Breathe Easy:</span> Track Your Air
          Quality
        </h1>
        <p className="text-center text-xl font-sm mb-5">
          Stay informed about the air you breathe. Monitor the Air Quality Index
          <strong className=" mx-2">(AQI)</strong> in your area and take
          necessary precautions to safeguard your health.
        </p>
        <Suspense>
          <CTAButton />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
