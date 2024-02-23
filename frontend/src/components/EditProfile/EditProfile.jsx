import { userAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { ProfileHeader } from "./ProfileHeader";
import { Photos } from "./Photos";
export const EditProfile = () => {
  const user = useAtomValue(userAtom);

  return (
    <div className="w-full h-full">
      <ProfileHeader />
      <Photos />
    </div>
  );
};
