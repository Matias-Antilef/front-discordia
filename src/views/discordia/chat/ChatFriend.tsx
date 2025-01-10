import ChatHeader from "@/views/discordia/chat/components/ChatHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useParams } from "react-router";
import { socket } from "@/utils/socket";

function ChatFriend() {
  const { id } = useParams();

  const [messages, setMessages] = useState<{ content: string }[]>([
    { content: "friend" },
  ]);
  const [message, setMessage] = useState("");

  const handleNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    socket.emit("sendMessageToSpecificUser", id, message);
    socket.emit("sendMessageToChannel", id, message);
    setMessage("");
  };

  return (
    <Card className="h-full flex flex-col bg-neutral-700 text-neutral-200 ">
      <ChatHeader
        name={id ? id.toString() : "UNDEFINED"}
        type="server"
        key={1}
      />
      <CardContent className=" h-[90vh] relative flex flex-col">
        <ScrollArea className=" flex-1 ">
          <div className="flex flex-col gap-1 ">
            {messages.map((message, index) => (
              <p className="py-1" key={index}>
                {message.content}
              </p>
            ))}
          </div>
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
export default ChatFriend;
