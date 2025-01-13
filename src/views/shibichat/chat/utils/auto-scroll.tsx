import { useEffect, useRef } from "react";
import { MessagesModel } from "../model";

export default function AutoScroll({
  messages,
}: {
  messages: MessagesModel[];
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return <div ref={bottomRef} />;
}
