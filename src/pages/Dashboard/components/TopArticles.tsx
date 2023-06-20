import { RiMore2Line } from "react-icons/ri";

import { sortByProperty } from "@/utils";

import { topArticlesData } from "../data";

const TopArticles = () => {
  return (
    <section className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-800 font-heading font-bold">
          Top Performing Articles
        </h2>
        <RiMore2Line className="w-4 h-4" />
      </div>
      <ul>
        {sortByProperty(topArticlesData, "earnings").map(
          ({ id, title, earnings, status }, index) => (
            <li key={id} className="flex items-center mt-3 justify-between">
              <div className="inline-flex gap-2">
                <span className="text-gray-400">{index + 1}</span>
                <h3>{title}</h3>
              </div>
              <div className="inline-flex flex-wrap items-center gap-4">
                <span
                  className={`px-2 py-0.5 rounded-3xl text-sm block lg:hidden xl:block ${
                    status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {status}
                </span>
                <h4 className="w-16 text-right">${earnings}</h4>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export { TopArticles };
