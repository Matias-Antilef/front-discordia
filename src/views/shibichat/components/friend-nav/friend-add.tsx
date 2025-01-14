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
import { DialogDescription } from "@radix-ui/react-dialog";

function FriendAdd() {
  const { addFriend, getFriends } = useUser();
  const friends = getFriends();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name) return alert("El username es requerido");

    if (friends.map((friend) => friend.username).includes(name)) {
      return alert("Ya tienes a este usuario en tu lista");
    }

    addFriend({ username: name });
    setName("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <UserPlusIcon className="hover:bg-neutral-600 p-1 h-16 w-16 stroke-[.5px] rounded-full transition-colors   hover:cursor-pointer stroke-white " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-700 flex flex-col gap-10  text-neutral-500 border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar amigo</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-5">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-none bg-neutral-600 py-5 placeholder:text-neutral-300 text-neutral-200"
            placeholder="Nombre de usuario"
          />
        </DialogDescription>
        <DialogFooter>
          <Button type="submit" variant="secondary" onClick={handleSubmit}>
            Agregar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default FriendAdd;
