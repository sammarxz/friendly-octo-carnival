import { useState } from "react";

import { createClassName } from "@/utils";

import { MenuItem } from ".";

import { sidebarItems } from "../data";
import { Logo } from "@/components";

interface SidebarProps {
  onSidebarHide: () => void;
  showSidebar: boolean;
}

const Sidebar = ({ onSidebarHide, showSidebar }: SidebarProps) => {
  const [selected, setSelected] = useState("0");
  const sidebarClassName = createClassName(
    `fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col 
    z-10 text-gray-800 border-r-2 border-gray-100 py-4`,
    {
      flex: showSidebar,
      hidden: !showSidebar,
    },
  );

  return (
    <aside className={sidebarClassName}>
      <div className="flex-shrink-0 overflow-hidden px-4">
        <div className="flex items-center h-full justify-center p-2 pb-4">
          <Logo type="icon" className="sm:w-6 sm:h-6 xl:w-9 xl:h-9" />
          <div className="ml-3 block sm:hidden xl:block">
            <div className="font-bold font-heading text-lg leading-none">
              Publisher Name
            </div>
            <span className="text-gray-400 uppercase text-sm">Buzzing.com</span>
          </div>
          <div className="flex-grow sm:hidden xl:block" />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col mx-4">
        {sidebarItems.map((i) => (
          <MenuItem key={i.id} item={i} selected={selected} />
        ))}
        <div className="flex-grow" />
      </div>
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          {/* <Image path="mock_faces_8" className="w-10 h-10" /> */}
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Jerry Wilson
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          {/* <Icon
            path="res-react-dash-options"
            className="block sm:hidden xl:block w-3 h-3"
          /> */}
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
