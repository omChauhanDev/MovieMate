import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UpdateDetails } from "./UpdateDetails";
import { DeleteAccount } from "./DeleteAccount";

export const AccountSettings = () => {
  return (
    <div className="flex-1 py-8 md:pt-8 pb-6 w-full">
      <Tabs
        defaultValue="edit-details"
        className="flex flex-col pt-2 justify-center items-center"
      >
        <TabsList className="w-[90%] md:w-[40%]">
          <TabsTrigger value="edit-details" className="flex-1">
            Edit Details
          </TabsTrigger>
          <TabsTrigger value="danger-zone" className="flex-1">
            Danger Zone
          </TabsTrigger>
        </TabsList>
        <TabsContent value="edit-details" className="w-full">
          <UpdateDetails />
        </TabsContent>
        <TabsContent value="danger-zone" className="w-[90%] md:w-[40%]">
          <DeleteAccount />
        </TabsContent>
      </Tabs>
    </div>
  );
};
