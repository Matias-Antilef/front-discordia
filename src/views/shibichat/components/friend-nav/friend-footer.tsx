import { CardFooter } from "@/components/ui/card";
import FriendAdd from "./friend-add";

function FriendFooter() {
  return (
    <CardFooter className="flex items-center h-[10vh] justify-around bottom-0 absolute w-full p-0  m-0">
      <FriendAdd />
    </CardFooter>
  );
}
export default FriendFooter;
