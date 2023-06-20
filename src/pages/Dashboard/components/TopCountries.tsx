import {
  RiAddLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiMore2Line,
} from "react-icons/ri";

import { sortByProperty } from "@/utils";

import { countryData } from "../data";

const TopCountries = () => {
  return (
    <section className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-800 font-heading font-bold">Top Countries</h2>
        <RiAddLine className="w-5 h-5 text-gray-800" />
      </div>
      {sortByProperty(countryData, "value").map(
        ({ name, rise, value, id }, index) => (
          <div className="flex items-center mt-3" key={id}>
            <div className="text-gray-400">{index + 1}</div>
            <img
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${id}.svg`}
              alt={id}
              className="ml-2 w-6 h-6"
            />
            <div className="ml-2">{name}</div>
            <div className="flex-grow" />
            <div className="font-semibold">{`$${value.toLocaleString()}`}</div>
            {rise ? (
              <RiArrowUpLine className="w-4 h-4 mx-3 text-green-500" />
            ) : (
              <RiArrowDownLine className="w-4 h-4 mx-3 text-red-500" />
            )}
            <RiMore2Line className="w-3 h-3" />
          </div>
        ),
      )}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">Check All</div>
      </div>
    </section>
  );
};

export { TopCountries };
