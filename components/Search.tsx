"use client";

import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import useSWR from "swr";
import useDebounce from "@/hooks/use-debounce";
import { Location } from "@/types/location.types";
import { useRouter } from "next/navigation";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

const Search = () => {
  const [inputValue, setInputValue] = React.useState("kathmandu");
  const debouncedSearch = useDebounce(inputValue, 500);

  const { data, isLoading, error } = useSWR<Location[]>(
    debouncedSearch ? `/api/search?keyword=${debouncedSearch}` : null,
    fetcher
    // {
    //   refreshInterval: 10,
    // }
  );
  const router = useRouter();

  return (
    <Combobox
      value={inputValue}
      onChange={(value) => {
        const [lat, lng] = value as unknown as [number, number];
        router.push(`/station/${lat}/${lng}`);
      }}
    >
      <div className="relative mt-1 md:w-[50%] w-full ">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for a place..."
          />
        </div>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setInputValue("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {error && <div>Error loading data</div>}
            {/* {isLoading && <div>Loading...</div>} */}
            {data &&
              data.map((location) => (
                <Combobox.Option
                  key={location.uid}
                  value={location.station.geo}
                  as={React.Fragment}
                >
                  <li className="bg-white text-black">
                    {location.station.name}
                  </li>
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
export default Search;
