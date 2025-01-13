import { useUser } from "@/context/hooks/useUser";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ServerItem from "./server-item";
import { ServerModel } from "@/models/user.model";
import { Link } from "react-router";
import { PrivateRoutes } from "@/models/routes";
import { CreateServer } from "./create-server";

function ServerNav() {
  const { getServers } = useUser();
  const servers = getServers();
  return (
    <Card className="h-full flex flex-col w-20 relative bg-neutral-800 ">
      <CardHeader className="items-center h-[10vh]  ">
        <Link
          to={`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.HOME}`}
          className="h-14 w-14 font-bold text-black items-center flex justify-center bg-blue-300 m-4 rounded-full"
        >
          ME
        </Link>
      </CardHeader>
      <CardContent className="flex-1 relative">
        <ScrollArea className="h-[80vh] ">
          {servers &&
            servers.map(({ name }: ServerModel) => (
              <ServerItem key={name} id={name} />
            ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="h-[10vh] p-0 items-center justify-center flex   absolute bottom-0 m-0 w-full">
        <CreateServer />
      </CardFooter>
    </Card>
  );
}
export default ServerNav;
