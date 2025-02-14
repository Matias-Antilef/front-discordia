import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  name: string;
  type: "server" | "friend";
}
function ChatHeader({ name, type }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-5 px-5 py-3 relative border-b-2 border-neutral-800">
      <Avatar className="h-12 w-12 relative overflow-visible">
        <AvatarImage
          src={type === "server" ? "/server.jpg" : "/avatar.jpg"}
          className="w-full bg-neutral-100 h-full rounded-full p-1 object-cover"
        />
        <AvatarFallback> {name.slice(0, 2).toUpperCase()} </AvatarFallback>
        {type === "friend" && (
          <span className="absolute h-4 w-4 rounded-full bg-green-500 right-0 bottom-0" />
        )}
      </Avatar>
      <h3 className="font-medium">{name} </h3>
    </div>
  );
}
export default ChatHeader;
