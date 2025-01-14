import AvatarCustom from "@/components/ui/AvatarCustom";
import { PrivateRoutes } from "@/models/routes";
import { Link } from "react-router";
import { X } from "lucide-react";

function FriendItem({ username }: { username: string }) {
  return (
    <Link
      to={`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.CHAT_FRIEND}/${username}`}
      className="flex items-center justify-between my-1 bg-neutral-700 hover:bg-neutral-600 rounded-lg py-1 transition-colors"
    >
      <div className="flex items-center gap-1 flex-1 ">
        <AvatarCustom username={username} status="online" />
        <h3 className=" text-white truncate-chars w-44 ">{username}</h3>
      </div>
      <X className="stroke-neutral-400 hover:stroke-red-500 mr-1 transition-colors" />
    </Link>
  );
}
export default FriendItem;
