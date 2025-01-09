import PrimaryNav from "./navbar/PrimaryNav";
import ServerNav from "./server/ServerNav";

function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen  overflow-hidden flex">
      <ServerNav />
      <PrimaryNav />
      {children}
    </div>
  );
}
export default LayoutComponent;
