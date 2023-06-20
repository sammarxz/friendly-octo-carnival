import { useState } from "react";

import { Sidebar, Content } from "./components";

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
};

export { Dashboard };
