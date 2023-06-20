import React from "react";
import { createClassName } from "@/utils";

interface MenuItemProps {
  item: {
    id: string;
    title: string;
    Icon: React.ComponentType<{ className: string }>;
  };
  selected: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item: { id, title, Icon },
  selected,
}) => {
  const menuItemClassName = createClassName(
    `w-full mt-2 flex items-center py-2 px-3 sm:py-4 sm:px-0 xl:px-3 xl:py-2 justify-start 
    sm:justify-center xl:justify-start cursor-pointer
    text-md rounded font-medium hover:text-primary-500 hover:bg-primary-100`,
    {
      "text-primary-500 bg-primary-100 font-semibold": selected === id,
      "sidebar-item font-normal": selected !== id,
    },
  );

  return (
    <div className={menuItemClassName}>
      <Icon className="text-xl" />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
    </div>
  );
};

export { MenuItem };
