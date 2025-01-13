import AvatarCustom from "@/components/ui/AvatarCustom";
import { PrivateRoutes } from "@/models/routes";
import { Link } from "react-router";
import { X } from "lucide-react";
import { useUser } from "@/context/hooks/useUser";

function FriendItem({ id }: { id: string }) {
  const { removeFriend } = useUser();
  return (
    <Link
      to={`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.CHAT_FRIEND}/${id}`}
      className="flex hover:cursor-pointer items-center mb-1  h-16 gap-2 bg-neutral-700 group hover:bg-neutral-600 rounded-lg px-1"
    >
      <AvatarCustom id="1" status="online" />
      <h3 className="flex-1  text-white"> {id} </h3>
      <X
        className="stroke-neutral-400 group-hover:stroke-white hover:bg-neutral-500  rounded-full transition-colors "
        onClick={() => removeFriend({ username: id })}
      />
    </Link>
  );
}
export default FriendItem;
