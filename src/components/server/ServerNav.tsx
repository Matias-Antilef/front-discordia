import { useUserContext } from "@/context/UserProvider";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

function ServerNav() {
  const { logout } = useUserContext();
  return (
    <Card className="bg-green-400 h-full w-20">
      <CardHeader>
        <Button onClick={() => logout()}>Logout</Button>
      </CardHeader>
      <CardContent className=""></CardContent>
    </Card>
  );
}
export default ServerNav;
