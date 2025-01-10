import { useUser } from "@/context/hooks/useUser";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import ServerItem from "./ServerItem";
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
          to={`${PrivateRoutes.DISCORDIA}/${PrivateRoutes.HOME}`}
          className="h-14 w-14 items-center flex justify-center bg-blue-200 m-4 rounded-full"
        >
          ME
        </Link>
      </CardHeader>
      <CardContent className="flex-1 relative">
        <ScrollArea className="h-[80vh] ">
          {servers &&
            servers.map(({ name }: ServerModel) => (
              <ServerItem key={name} fallback={name} id={name} />
            ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex  h-[10vh] p-2 items-center justify-center  absolute bottom-0 w-full">
        <CreateServer />
      </CardFooter>
    </Card>
  );
}
export default ServerNav;
