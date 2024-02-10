import { useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/store/atoms";

export const Dashboard = () => {
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    console.log(user);
  }, [user]);
  
  return <div>Dashboard</div>;
};
