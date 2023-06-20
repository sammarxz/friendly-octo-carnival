import { useState } from "react";
import { RiCloseFill, RiMore2Line } from "react-icons/ri";

import { sidebarItems } from "../data";

import { createClassName } from "@/utils";

import { IconButton, Logo } from "@/components";

import { MenuItem } from ".";

interface SidebarProps {
  onSidebarHide: () => void;
  showSidebar: boolean;
}

const Sidebar = ({ onSidebarHide, showSidebar }: SidebarProps) => {
  const [selected, _setSelected] = useState("0");
  const sidebarClassName = createClassName(
    `fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col 
    z-10 text-gray-800 border-r border-gray-200 py-4 bg-white`,
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
            <span className="text-gray-400 uppercase text-xs">Buzzing.com</span>
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            Icon={RiCloseFill}
            className="block sm:hidden text-2xl"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col mx-4">
        {sidebarItems.map((i) => (
          <MenuItem key={i.id} item={i} selected={selected} />
        ))}
        <div className="flex-grow" />
      </div>
      <div className="flex-shrink-0 overflow-hidden p-2 pt-4 border-t border-gray-200">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/19997815?v=4"
            alt="Sam Marxz"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex sm:hidden xl:flex flex-col gap-1">
            <h3 className="font-bold font-heading leading-none">Sam Marxz</h3>
            <h4 className="text-xs text-gray-400">sammarxz@protonmail.com</h4>
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <RiMore2Line className="block sm:hidden xl:block w-3 h-3 text-2xl" />
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
