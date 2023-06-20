import { RiCalendarLine, RiMenu3Fill } from "react-icons/ri";

import { IconButton, SearchInput } from "@/components";

import { getCurrentDate } from "@/utils";

import {
  Graph,
  TopCountries,
  Segmentation,
  Satisfication,
  TopArticles,
} from ".";

interface ContentProps {
  onSidebarHide: () => void;
}

const Content: React.FC<ContentProps> = ({ onSidebarHide }) => {
  return (
    <section className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className="h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-center">
          <div className="sm:flex-grow flex justify-between flex-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold font-heading text-gray-800">
                Dashboard
              </h1>
              <div className="flex items-center">
                <RiCalendarLine className="w-3 h-3 text-primary-500" />
                <div className="ml-2 text-gray-400">{getCurrentDate()}</div>
              </div>
            </div>
            <IconButton
              Icon={RiMenu3Fill}
              className="block sm:hidden text-2xl"
              onClick={onSidebarHide}
            />
          </div>
          <form
            onSubmit={() => {}}
            className="w-full sm:w-80 mt-4 sm:mt-0 relative flex align-center"
          >
            <SearchInput label="Search" placeholder="Search..." />
          </form>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="h-full w-full p-2">
            <div className="h-full rounded-lg bg-white border border-gray-200">
              <Graph />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="h-full rounded-lg bg-white border border-gray-200">
              <TopCountries />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
          <div className="h-full p-2">
            <div className="h-full rounded-lg bg-white border border-gray-200">
              <Segmentation />
            </div>
          </div>
          <div className="p-2">
            <div className="h-full rounded-lg bg-white border border-gray-200">
              <Satisfication />
            </div>
          </div>
          <div className="p-2">
            <div className="h-full rounded-lg bg-white border border-gray-200 overflow-hidden">
              <TopArticles />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Content };
