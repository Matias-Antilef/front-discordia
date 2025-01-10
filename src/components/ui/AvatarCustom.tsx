import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarCustom({
  id,
  status,
}: {
  id: string;
  status: "online" | "offline" | "sleeping";
}) {
  const online = "bg-green-500";
  const offline = "bg-neutral-500";
  const sleeping = "bg-yellow-500";

  return (
    <Avatar className="h-12 w-12 p-[2px] relative overflow-visible">
      <AvatarImage
        src="/avatar.jpg"
        className="w-full h-full rounded-full p-1"
      />
      <AvatarFallback> {id.slice(0, 2)} </AvatarFallback>
      <span
        className={`${
          status == "online" ? online : status == "offline" ? offline : sleeping
        }  absolute h-4 w-4   rounded-full border-[1px] border-black  right-0 bottom-0`}
      />
    </Avatar>
  );
}
export default AvatarCustom;
