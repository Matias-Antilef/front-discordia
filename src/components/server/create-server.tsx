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
import { PlusCircle } from "lucide-react";
import { socket } from "@/utils/socket";

export function CreateServer() {
  const { createServer, getServers } = useUser();
  const servers = getServers();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name) return alert("El nombre es requerido");

    if (servers.map((server) => server.name).includes(name)) {
      alert("El servidor ya existe");
      return;
    }
    createServer({ name, description });

    socket.on("welcomeMessage", (message) => {
      console.log(message);
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PlusCircle className="p-0 h-full w-full hover:cursor-pointer stroke-white " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900 flex flex-col gap-10  text-neutral-500 border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Unirse a un servidor</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-none bg-neutral-700 py-5 placeholder:text-neutral-300 text-neutral-200"
            placeholder="Nombre del servidor"
          />
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="  border-none bg-neutral-700 py-5 placeholder:text-neutral-300 text-neutral-200"
            placeholder="Descripción del servidor"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            className=" text-black"
            onClick={handleSubmit}
          >
            Unirse
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
