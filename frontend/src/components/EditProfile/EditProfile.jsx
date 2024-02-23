import { userAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { ProfileHeader } from "./ProfileHeader";
import { Photos } from "./Photos";
export const EditProfile = () => {
  const user = useAtomValue(userAtom);

  return (
    <div className="flex-1 h-full overflow-y-auto">
      <ProfileHeader />
      <Photos />
    </div>
  );
};
