import { useEffect } from "react";
import { socket } from "./socket";
import { MessagesModel } from "@/views/discordia/chat/model";

interface UseSocketParams {
  id: string | undefined;
  setMessages: React.Dispatch<React.SetStateAction<MessagesModel[]>>;
  event: string;
}

export default function useSocket({ id, setMessages, event }: UseSocketParams) {
  useEffect(() => {
    const handleEvent = (data: { fromUser: string; message: string }) => {
      setMessages((prev) => [
        ...prev,
        { fromUser: data.fromUser, content: data.message },
      ]);
    };

    socket.on(event, handleEvent);

    return () => {
      socket.off(event, handleEvent);
    };
  }, [id, event, setMessages]);
}
