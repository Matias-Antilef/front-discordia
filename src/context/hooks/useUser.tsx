import { useDispatch, useSelector } from "react-redux";
import { ServerModel, UserModel } from "@/models/user.model";
import { CreateServer, Logout, SetUser } from "../slices/userSlice";
import { RootState } from "../store";

export const useUser = () => {
  const dispatch = useDispatch();

  const createUser = (UserModel: UserModel) => {
    dispatch(SetUser({ ...UserModel }));
    return createUser;
  };

  const getUser = () => {
    return useSelector((state: RootState) => state.user.user);
  };

  const logout = () => {
    dispatch(Logout());
    return logout;
  };

  const createServer = (server: ServerModel) => {
    dispatch(CreateServer(server));
    return createServer;
  };

  const getServers = () => {
    return useSelector((state: RootState) => state.user.user.servers);
  };

  return { createUser, getUser, logout, createServer, getServers };
};
