import { Navigate, Route, Routes } from "react-router";
import ChatMain from "./chat/ChatMain";
import { PrivateRoutes } from "@/models/routes";
import LayoutComponent from "@/components/layout";
import HomePage from "./home/HomePage";
import { useEffect } from "react";
import { io } from "socket.io-client";

function Discordia() {
  useEffect(() => {
    const socket = io(import.meta.env.VITE_PUBLIC_SOCKET_PORT, {
      path: "/socket/",
      withCredentials: true,
    });

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    return () => {
      socket.on("disconnect", () => {});
    };
  }, []);
  console.log("Discordia");
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route
        path={PrivateRoutes.HOME}
        element={<LayoutComponent children={<HomePage />} />}
      />
      <Route
        path={`${PrivateRoutes.CHAT}/:id`}
        element={<LayoutComponent children={<ChatMain />} />}
      />
    </Routes>
  );
}
export default Discordia;
