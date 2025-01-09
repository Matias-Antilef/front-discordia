import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ChatHeader({ name }: { name: string }) {
  return (
    <div className="bg-neutral-700 border-b-[2px] border-neutral-800 py-2 px-5 gap-5 flex items-center text-white">
      <Avatar className="h-12 w-12 relative overflow-visible">
        <AvatarImage
          src="/avatar.jpg"
          className="w-full h-full rounded-full p-1"
        />
        <AvatarFallback> {name} </AvatarFallback>
        <span className="absolute h-4 w-4 rounded-full bg-green-500 right-0 bottom-0" />
      </Avatar>
      <h3 className="font-medium">{name} </h3>
    </div>
  );
}
export default ChatHeader;
