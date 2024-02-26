"use client";

import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import useSWR from "swr";
import useDebounce from "@/hooks/use-debounce";
import { Location } from "@/types/location.types";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Skeleton from "./Skeleton";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

const SearchSkeleton = () => (
  <div>
    <Combobox.Option
      className="relative cursor-default select-none py-1 pl-10 pr-4 "
      value="kathmandu"
    >
      <Skeleton className="h-8" />
    </Combobox.Option>
    <Combobox.Option
      className="relative cursor-default select-none py-1 pl-10 pr-4 "
      value="kathmandu"
    >
      <Skeleton className="h-8" />
    </Combobox.Option>
    <Combobox.Option
      className="relative cursor-default select-none py-1 pl-10 pr-4 "
      value="kathmandu"
    >
      <Skeleton className="h-8" />
    </Combobox.Option>
    <Combobox.Option
      className="relative cursor-default select-none py-1 pl-10 pr-4 "
      value="kathmandu"
    >
      <Skeleton className="h-8" />
    </Combobox.Option>
  </div>
);

const Search = () => {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedSearch = useDebounce(inputValue, 500);

  const { data, isLoading, error } = useSWR<Location[]>(
    debouncedSearch ? `/api/search?keyword=${debouncedSearch}` : null,
    fetcher
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
      <div className="relative mt-1 md:w-[50%] w-full">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg focus-within:rounded-none  bg-white text-left shadow-md focus:outline-none sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:border-transparent"
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
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {error && (
              <div className="py-2 pl-10 pr-4 text-red-400 text-bold">
                Error loading data
              </div>
            )}
            {isLoading && <SearchSkeleton />}
            {data &&
              data.map((location) => (
                <Combobox.Option
                  key={location.uid}
                  value={location.station.geo}
                  as={React.Fragment}
                >
                  {({ active }) => (
                    <li
                      className={clsx(
                        "relative cursor-default select-none py-2 pl-10 pr-4 ",
                        {
                          "bg-teal-600 text-white": active,
                          "text-gray-900": !active,
                        }
                      )}
                    >
                      {location.station.name}
                    </li>
                  )}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Search;
