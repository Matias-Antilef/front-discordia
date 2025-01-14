import { useUser } from "@/context/hooks/useUser";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ServerItem from "./server-item";
import { ServerModel } from "@/models/user.model";
import ServerHeader from "./server-header";
import ServerFooter from "./server-footer";
import { Separator } from "@/components/ui/separator";

function ServerNav() {
  const { getServers } = useUser();
  const servers = getServers();
  return (
    <Card className="h-full flex flex-col w-20 relative bg-neutral-800 ">
      <ServerHeader />
      <CardContent className="flex-1 relative">
        <Separator className="bg-red-500" />
        <ScrollArea className="h-[80vh] ">
          {servers &&
            servers.map(({ name }: ServerModel) => (
              <ServerItem key={name} id={name} />
            ))}
        </ScrollArea>
        <Separator className="bg-red-500" />
      </CardContent>
      <ServerFooter />
    </Card>
  );
}
export default ServerNav;
