import ChatHeader from "@/components/chat/ChatHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";

function ChatMain() {
  const { id } = useParams();

  const [messages, setMessages] = useState<{ content: string }[]>([]);
  const [message, setMessage] = useState("");
  const socket = io(import.meta.env.NEXT_PUBLIC_SOCKET_PORT, {
    path: "/socket/",
    withCredentials: true,
  });

  useEffect(() => {
    if (id) {
      socket.emit("joinChannel", id);
    }
    socket.on("channelMessage", (data) => {
      setMessages((prev) => [...prev, { content: data.message }]);
    });

    return () => {
      socket.off("channelMessage");
    };
  }, [id]);

  const handleNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setMessages((prev) => [...prev, { content: message }]);
    socket.emit("sendMessageToChannel", id, message);

    setMessage("");
  };
  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader>
        <ChatHeader name="Matias" key={1} />
      </CardHeader>
      <CardContent className=" bg-neutral-700 h-full text-slate-200 flex flex-col relative justify-between ">
        <ScrollArea className="h-[85%] ">
          {messages.map((message, index) => (
            <h1 key={index}>
              {message.content} {id}
            </h1>
          ))}
        </ScrollArea>

        <div className="flex h-[15%] items-start pt-2 ">
          <Input
            onKeyDown={(e) => e.key === "Enter" && handleNewMessage(e)}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-white outline-none"
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
