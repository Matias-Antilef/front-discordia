import ChatHeader from "@/views/discordia/chat/components/chat-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { socket } from "@/utils/socket";
import { useUser } from "@/context/hooks/useUser";
import { MessagesModel } from "./models/message";
import AutoScroll from "./utils/auto-scroll";
import MessageItem from "./components/message-item";
import useSocket from "@/utils/socket/useSocket";

function ChatMain({ type }: { type: "friend" | "server" }) {
  const { id } = useParams();
  const { getUser } = useUser();
  const username = getUser().username;

  const [messages, setMessages] = useState<MessagesModel[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessages([]);
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
    socket.emit("sendMessageToSpecificUser", id, message);
    setMessages((prev) => [...prev, { fromUser: username, content: message }]);
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
              <MessageItem index={index} message={message} />
            ))}
            <AutoScroll messages={messages} />
          </ul>
        </ScrollArea>
        <div className="flex relative space-x-5 py-5 items-center ">
          <Input
            onKeyDown={(e) => e.key === "Enter" && handleNewMessage(e)}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-white border-none bg-neutral-600 placeholder:text-neutral-400"
            placeholder="Enviar mensaje"
          />
          <Button onClick={handleNewMessage} className="w-32">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default ChatMain;
