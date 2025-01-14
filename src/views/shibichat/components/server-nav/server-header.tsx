import { CardHeader } from "@/components/ui/card";
import { PrivateRoutes } from "@/models/routes";
import { Link } from "react-router";

function ServerHeader() {
  return (
    <CardHeader className="items-center h-[10vh]">
      <Link
        to={`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.HOME}`}
        className="h-14 w-14 font-bold text-black items-center flex justify-center bg-blue-300 m-4 rounded-full"
      >
        ME
      </Link>
    </CardHeader>
  );
}
export default ServerHeader;
