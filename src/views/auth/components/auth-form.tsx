import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

function AuthForm({
  children,
  onSubmit,
  title,
  href,
  footerMsg,
  footerMsgLink,
}: {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  title: string;
  href: string;
  footerMsg: string;
  footerMsgLink: string;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[30vw] min-w-[500px]">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 ">
            {children}

            <Button type="submit" className="w-full">
              {title}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <span> {footerMsg} </span>
          <Link to={href} className="text-blue-500">
            {footerMsgLink}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default AuthForm;
