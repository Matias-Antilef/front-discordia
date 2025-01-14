import { CardFooter } from "@/components/ui/card";
import ServerCreate from "./server-create";

function ServerFooter() {
  return (
    <CardFooter className="h-[10vh] p-0 items-center justify-center flex   absolute bottom-0 m-0 w-full">
      <ServerCreate />
    </CardFooter>
  );
}
export default ServerFooter;
