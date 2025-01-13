import ChatHeader from "@/views/shibichat/chat/components/chat-header";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { socket } from "@/utils/socket/socket";
import { useUser } from "@/context/hooks/useUser";
import { MessagesModel } from "./model";
import AutoScroll from "./utils/auto-scroll";
import MessageItem from "./components/message-item";
import useSocket from "@/utils/socket/useSocket";
import ChatFooter from "./components/chat-footer";
import { PrivateRoutes } from "@/models/routes";

function ChatMain({ type }: { type: "friend" | "server" }) {
  const { id } = useParams();
  const { getUser, getFriends, getServers } = useUser();
  const username = getUser().username;
  const friends = getFriends();
  const servers = getServers();
  const navigate = useNavigate();

  const [messages, setMessages] = useState<MessagesModel[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (type === "friend" && id) {
      const friendExists = friends.filter((friend) => friend.username === id);
      if (friendExists.length === 0)
        navigate(`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.HOME}`);
    }
    if (type === "server" && id) {
      const serverExists = servers.filter((server) => server.name === id);
      if (serverExists.length === 0)
        navigate(`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.HOME}`);
    }

    return setMessages([]);
  }, [id]);

  if (type === "server") {
    useSocket({ id, setMessages, event: "channelMessage" });
  }
  if (type === "friend") {
    useSocket({ id, setMessages, event: "receiveMessageToSpecificUser" });
  }

  const handleNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    if (type === "friend") {
      socket.emit("sendMessageToSpecificUser", id, message);
      setMessages((prev) => [
        ...prev,
        { fromUser: username, content: message },
      ]);
    }
    if (type === "server") {
      socket.emit("sendMessageToChannel", id, message);
    }
    setMessage("");
  };

  return (
    <Card className="h-full flex flex-col bg-neutral-700 text-neutral-200 ">
      <ChatHeader
        name={id ? id.toString() : "UNDEFINED"}
        type="friend"
        key={1}
      />
      <CardContent className=" h-[90vh] relative flex flex-col">
        <ScrollArea className=" flex-1 ">
          <ul className="flex flex-col gap-1 ">
            {messages.map((message, index) => (
              <MessageItem key={index} message={message} />
            ))}
            <AutoScroll messages={messages} />
          </ul>
        </ScrollArea>
        <div className="flex relative space-x-5 py-5 items-center ">
          <ChatFooter
            message={message}
            setMessage={setMessage}
            handleNewMessage={handleNewMessage}
          />
        </div>
      </CardContent>
    </Card>
  );
}
export default ChatMain;
