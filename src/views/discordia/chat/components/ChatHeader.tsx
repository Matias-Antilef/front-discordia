import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function ChatHeader({
  name,
  type,
}: {
  name: string;
  type: "server" | "friend";
}) {
  return (
    <div className="flex items-center gap-5 px-5 py-3 relative border-b-2 border-neutral-800">
      <Avatar className="h-12 w-12 relative overflow-visible">
        <AvatarImage
          src="/avatar.jpg"
          className="w-full h-full rounded-full p-1"
        />
        <AvatarFallback> {name} </AvatarFallback>
        {type === "friend" && (
          <span className="absolute h-4 w-4 rounded-full bg-green-500 right-0 bottom-0" />
        )}
      </Avatar>
      <h3 className="font-medium">{name} </h3>
    </div>
  );
}
export default ChatHeader;
