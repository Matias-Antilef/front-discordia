import { useUser } from "@/context/hooks/useUser";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import FriendItem from "./FriendItem";
import { AddFriend } from "./add-friend";
import { Button } from "../ui/button";

function PrimaryNav() {
  const { getFriends, logout } = useUser();
  const friends = getFriends();
  return (
    <Card className="bg-neutral-900 h-full w-80 relative">
      <CardHeader></CardHeader>
      <CardContent className="h-[90vh] p-1">
        <ScrollArea className="flex flex-col  h-full">
          {friends &&
            friends.map((friend) => (
              <FriendItem key={friend.username} id={friend.username} />
            ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center justify-between bottom-0 absolute w-full h-[10vh]  m-0">
        <AddFriend />
        <Button onClick={() => logout()} variant={"destructive"}>
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
export default PrimaryNav;
