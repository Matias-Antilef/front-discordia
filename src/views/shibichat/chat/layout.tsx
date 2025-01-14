import FriendNav from "../components/friend-nav/friend-nav";
import ServerNav from "../components/server-nav/server-nav";

function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen  overflow-hidden flex">
      <ServerNav />
      <FriendNav />
      <div className="flex-1 h-screen ">{children}</div>
    </div>
  );
}
export default LayoutComponent;
