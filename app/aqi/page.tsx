import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import Search from "@/components/Search";
import { Suspense } from "react";
import Header from "@/components/Header";

const labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const barData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [112, 122, 32, 232, 432, 432, 992, 234, 234],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [10, 20, 50, 780, 980, 5, 992, 9, 77],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col gap-12 pb-12">
      <div className=" bg-[#89FFA3] flex flex-col gap-12  rounded-b-3xl">
        <Header />
        <div className="container flex flex-col gap-4 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-3 md:gap-0 md:justify-between justify-center items-center">
            <div className="order-2 flex flex-col gap-4">
              <h2 className="-ml-1.5 text-6xl font-bold">Bejing</h2>
              <span className="font-bold text-base">Bejing Station</span>
              <span className="font-bold text-sm">22.8045, 33600</span>
            </div>
            <div className="order-1 md:order-3  flex justify-center md:pl-10">
              <div className="w-fit p-12 shadow-2xl text-3xl bg-white font-bold text-black cursor-pointer  border-4 border-gray-300 rounded-full hover:bg-green-50 hover:-translate-y-2 transition-all duration-150">
                45
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-lg text-blue-600">History</p>
            <div className="flex gap-4 mt-3 mb-10">
              {/* dew component */}
              <div className="px-5 rounded-md py-3 flex flex-col justify-center align-center gap-3 ring-2 ring-white ring-inset bg-[#c0f0cb]">
                <span className="text-xs font-normal text-center">Dew</span>
                <span className="text-xs font-bold text-center">26</span>
              </div>
              {/* dew component */}
              <div className="px-5 rounded-md py-3 flex flex-col justify-center align-center gap-3 ring-2 ring-white ring-inset bg-[#c0f0cb]">
                <span className="text-xs font-normal text-center">Dew</span>
                <span className="text-xs font-bold text-center">26</span>
              </div>
              {/* dew component */}
              <div className="px-5 rounded-md py-3 flex flex-col justify-center align-center gap-3 ring-2 ring-white ring-inset bg-[#c0f0cb]">
                <span className="text-xs font-normal text-center">Dew</span>
                <span className="text-xs font-bold text-center">26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 container">
        <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
          <Card color="green" name="co2" value="123" />
          <Card color="red" name="co2" value="123" />
          <Card color="yellow" name="co2" value="123" />
          <Card color="blue" name="co2" value="123" />
          <Card color="orange" name="co2" value="123" />
          <Card color="red" name="co2" value="123" />
          <Card color="green" name="co2" value="123" />
          <Card color="yellow" name="co2" value="123" />
        </div>
      </div>
      <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
        <h2 className="text-center text-xl">Forcasts</h2>
        <div className="grid md:grid-cols-3  gap-4">
          <Card color="red" name="co2" value="123" />
          <Card color="green" name="co2" value="123" />
          <Card color="yellow" name="co2" value="123" />
        </div>
      </div>
      <div className="container px-20 mx-auto">
        <Suspense
          fallback={
            <div className="flex justify-center items-center text-white h-[60px] bg-red-500 rounded relative mt-1 md:w-[50%] w-full "></div>
          }
        >
          <BarChart barData={barData} />
        </Suspense>
      </div>
      <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
        <h2 className="text-center text-xl">Recently Searched</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card color="green" name="Bejing" value="100" timePeriod="Today" />
          <Card color="red" name="Kathmandu" value="800" timePeriod="Today" />
          <Card color="yellow" name="New York" value="500" timePeriod="Today" />
        </div>
      </div>
    </main>
  );
}
