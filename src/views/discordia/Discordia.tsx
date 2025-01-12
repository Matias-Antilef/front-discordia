import { Navigate, Route, Routes } from "react-router";
import { PrivateRoutes } from "@/models/routes";
import HomePage from "./home/HomePage";
import { useEffect } from "react";
import { socket } from "@/utils/socket/socket";
import { useUser } from "@/context/hooks/useUser";
import LayoutComponent from "./chat/layout";
import ChatMain from "./chat/ChatMain";

function Discordia() {
  const { getServers } = useUser();
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
            element={<ChatMain type="friend" />}
          />
          <Route
            path={`${PrivateRoutes.CHAT_SERVER}/:id`}
            element={<ChatMain type="server" />}
          />
        </Routes>
      </LayoutComponent>
    </>
  );
}
export default Discordia;
