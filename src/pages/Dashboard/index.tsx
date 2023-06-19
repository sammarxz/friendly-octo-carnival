import { useAtom } from "jotai";

import { userAtom } from "@/atoms";

const Dashboard = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <h1 className="text-3xl">Dashboard</h1>
      {JSON.stringify(user)}
    </>
  );
};

export { Dashboard };
