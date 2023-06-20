import { routes } from "@/routes";
import { useRoutes } from "react-router-dom";
import { useAtom } from "jotai";

import { loggedAtom } from "./atoms";

const App = () => {
  const [loggedIn] = useAtom(loggedAtom);

  const routing = useRoutes(routes(loggedIn));

  return <>{routing}</>;
};

export { App };
