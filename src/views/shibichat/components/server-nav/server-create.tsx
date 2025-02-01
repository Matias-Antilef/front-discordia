import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useUser } from "@/context/hooks/useUser";
import { PlusCircle } from "lucide-react";
import { socket } from "@/utils/socket/socket";

function ServerCreate() {
  const { createServer, getServers } = useUser();
  const servers = getServers();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name) return alert("El nombre es requerido");

    if (servers.map((server) => server.name).includes(name)) {
      return alert("El servidor ya existe");
    }
    console.log(name, description);
    createServer({ name, description });

    socket.on("welcomeMessage", (message) => {
      console.log(message);
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PlusCircle className="rounded-full p-2 hover:p-1 transition-all h-16 w-16 stroke-[1px] hover:cursor-pointer stroke-white" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-700 flex flex-col gap-10 border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Unirse a un servidor</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-5">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-none bg-neutral-600 py-5 placeholder:text-neutral-300 text-neutral-200"
            placeholder="Nombre del servidor"
          />
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="  border-none bg-neutral-600 py-5 placeholder:text-neutral-300 text-neutral-200"
            placeholder="Descripción del servidor"
          />
        </DialogDescription>
        <DialogFooter>
          <Button type="submit" variant="secondary" onClick={handleSubmit}>
            Unirse
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default ServerCreate;
