import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PrivateRoutes } from "@/models/routes";

function ServerItem({ fallback, id }: { fallback: string; id: string }) {
  return (
    <Link to={`${PrivateRoutes.DISCORDIA}/${PrivateRoutes.CHAT_SERVER}/${id}`}>
      <Avatar className="h-14 w-14 bg-slate-300  border-none p-[2px] relative my-2 ">
        <AvatarImage src="/avatar.jpg" className="w-full h-full rounded-full" />
        <AvatarFallback> {fallback} </AvatarFallback>
      </Avatar>
    </Link>
  );
}
export default ServerItem;
