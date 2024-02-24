"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import useSWR from "swr";

const apiKey = "ge-9a9d07c380e99828";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.features || [];
};

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const { data, error } = useSWR(
    inputValue.trim() !== "" && inputValue?.length > 3
      ? `https://api.geocode.earth/v1/autocomplete?api_key=${apiKey}&layers=coarse&text=
${encodeURIComponent(inputValue)}`
      : null,
    fetcher
  );

  return (
    <Combobox
      value={inputValue}
      onChange={(value: any) => setInputValue(value)}
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
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setInputValue("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {error && <div>Error loading data</div>}
            {!error && !data && <div>Loading...</div>}
            {data &&
              data.map((prediction: any) => (
                <Combobox.Option
                  key={prediction.properties.source_id}
                  value={prediction.properties.label}
                  as={Fragment}
                >
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {selected && "✅"}
                      {prediction.properties.label}
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
