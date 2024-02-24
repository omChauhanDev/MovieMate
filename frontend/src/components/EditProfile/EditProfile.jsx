import { ProfileHeader } from "./ProfileHeader";
import { Photos } from "./Photos";
export const EditProfile = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto">
      <ProfileHeader />
      <Photos />
    </div>
  );
};
