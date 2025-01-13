import { useUser } from "@/context/hooks/useUser";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import FriendItem from "./friend-item";
import { AddFriend } from "./add-friend";
import { Button } from "../../../../components/ui/button";

function FriendNav() {
  const { getFriends, logout } = useUser();
  const friends = getFriends();
  return (
    <Card className="bg-neutral-900 h-full w-72 relative">
      <CardContent className="h-[90vh] p-1">
        <ScrollArea className="flex flex-col  h-full">
          {friends &&
            friends.map((friend) => (
              <FriendItem key={friend.username} id={friend.username} />
            ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center  h-[10vh] justify-around bottom-0 absolute w-full p-0  m-0">
        <AddFriend />
        <Button
          onClick={() => logout()}
          className="font-semibold"
          variant={"destructive"}
        >
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
export default FriendNav;
