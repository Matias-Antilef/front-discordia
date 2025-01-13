import { useUser } from "@/context/hooks/useUser";

function HomePage() {
  const { getUser } = useUser();
  const user = getUser().username;
  return (
    <div className="bg-neutral-700 h-full text-white flex-1 items-center justify-center flex">
      <h1 className="text-3xl font-semibold">{user} </h1>
    </div>
  );
}
export default HomePage;
