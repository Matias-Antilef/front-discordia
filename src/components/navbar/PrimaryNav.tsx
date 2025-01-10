import { useUser } from "@/context/hooks/useUser";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import FriendItem from "./components/FriendItem";

function PrimaryNav() {
  const { logout } = useUser();
  return (
    <Card className="bg-blue-400 h-full w-80">
      <CardHeader></CardHeader>
      <CardContent className="h-[90vh] p-1">
        <ScrollArea className="flex flex-col  h-full">
          <FriendItem id="1" />
          <FriendItem id="2" />
        </ScrollArea>
        <Button
          onClick={() => logout()}
          className="h-[10vh] w-full items-center flex justify-center font-semibold text-xl"
          variant={"destructive"}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
export default PrimaryNav;
