import { useUser } from "@/context/hooks/useUser";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import FriendItem from "./friend-item";
import FriendFooter from "./friend-footer";
import { Separator } from "@/components/ui/separator";
import FriendHeader from "./friend-header";

function FriendNav() {
  const { getFriends } = useUser();
  const friends = getFriends();

  return (
    <Card className="bg-neutral-900 p-2 h-full w-72 relative">
      <FriendHeader />
      <CardContent className="h-[80vh] p-0">
        <Separator className="my-2" />
        <ScrollArea className="flex flex-col gap-2 h-full">
          {friends &&
            friends.map((friend) => (
              <FriendItem key={friend.username} username={friend.username} />
            ))}
        </ScrollArea>
        <Separator className="my-2" />
      </CardContent>
      <FriendFooter />
    </Card>
  );
}
export default FriendNav;
