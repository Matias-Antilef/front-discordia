import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useUser } from "@/context/hooks/useUser";
import { UserPlusIcon } from "lucide-react";
import { socket } from "@/utils/socket";

export function AddFriend() {
  const { addFriend, getFriends } = useUser();
  const friends = getFriends();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name) return alert("El username es requerido");

    if (friends.map((friend) => friend.username).includes(name)) {
      alert("Ya tienes a este usuario en tu lista");
      return;
    }
    socket.on("receiveMessageToSpecificUser", (data) => {
      console.log(data);
    });
    addFriend({ username: name });
    setName("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <UserPlusIcon className="hover:bg-neutral-600 rounded-full transition-colors  p-1 h-12 w-12 hover:cursor-pointer stroke-white " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900 flex flex-col gap-10  text-neutral-500 border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar amigo</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-none bg-neutral-800 py-5 placeholder:text-neutral-400"
            placeholder="Nombre de usuario"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            className=" text-black"
            onClick={handleSubmit}
          >
            Agregar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
