import { Navigate, Route, Routes } from "react-router";
import { PrivateRoutes } from "@/models/routes";
import LayoutComponent from "@/components/layout";
import HomePage from "./home/HomePage";
import { useEffect } from "react";
import ChatFriend from "./chat/ChatFriend";
import ChatServer from "./chat/ChatServer";
import { socket } from "@/utils/socket";

function Discordia() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("recievedMessage", (message) => {
      console.log("Recieved message", message);
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
