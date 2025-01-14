import { CardHeader } from "@/components/ui/card";
import { UserPlus2Icon } from "lucide-react";

function FriendHeader() {
  return (
    <CardHeader className="">
      <div className="flex gap-1 bg-neutral-600 p-2 px-3 rounded-lg text-white">
        <UserPlus2Icon />
        <h3 className="flex-1 font-semibold"> Amigos </h3>
      </div>
    </CardHeader>
  );
}
export default FriendHeader;
