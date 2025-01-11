import { Navigate, Route, Routes } from "react-router";
import { PrivateRoutes } from "@/models/routes";
import LayoutComponent from "@/components/layout";
import HomePage from "./home/HomePage";
import { useEffect } from "react";
import ChatFriend from "./chat/ChatFriend";
import ChatServer from "./chat/ChatServer";
import { socket } from "@/utils/socket";
import { useUser } from "@/context/hooks/useUser";

function Discordia() {
  const { getServers, logout } = useUser();
  const serversId = getServers().map((server) => server.name);

  useEffect(() => {
    if (serversId.length > 0) {
      socket.emit("joinChannel", serversId);
    }
  }, [serversId]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    return () => {
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    };
  }, []);
  return (
    <>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
          <Route path={PrivateRoutes.HOME} element={<HomePage />} />
          <Route
            path={`${PrivateRoutes.CHAT_FRIEND}/:id`}
            element={<ChatFriend />}
          />
          <Route
            path={`${PrivateRoutes.CHAT_SERVER}/:id`}
            element={<ChatServer />}
          />
        </Routes>
      </LayoutComponent>
    </>
  );
}
export default Discordia;
