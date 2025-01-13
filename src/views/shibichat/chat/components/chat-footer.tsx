import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatFooterProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleNewMessage: (e: React.FormEvent) => void;
}

function ChatFooter({
  message,
  setMessage,
  handleNewMessage,
}: ChatFooterProps) {
  return (
    <>
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
    </>
  );
}
export default ChatFooter;
