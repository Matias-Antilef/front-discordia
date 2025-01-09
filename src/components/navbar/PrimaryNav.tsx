import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import FriendContet from "./components/FriendContet";

function PrimaryNav() {
  return (
    <Card className="bg-blue-400 h-full w-80">
      <CardHeader></CardHeader>
      <CardContent className="h-full p-1">
        <ScrollArea className="flex flex-col  h-full">
          <FriendContet id="1" />
          <FriendContet id="2" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
export default PrimaryNav;
