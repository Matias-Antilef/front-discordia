import { useDispatch, useSelector } from "react-redux";
import { FriendModel, ServerModel, UserModel } from "@/models/user.model";
import {
  AddFriend,
  CreateServer,
  ExitServer,
  Logout,
  RemoveFriend,
  SetUser,
} from "../slices/userSlice";
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
  const exitServer = (server: ServerModel) => {
    dispatch(ExitServer(server));
    return exitServer;
  };

  const getServers = () => {
    return useSelector((state: RootState) => state.user.user.servers);
  };
  const addFriend = (friend: FriendModel) => {
    dispatch(AddFriend(friend));
    return addFriend;
  };
  const removeFriend = (friend: FriendModel) => {
    dispatch(RemoveFriend(friend));
    return removeFriend;
  };
  const getFriends = () => {
    return useSelector((state: RootState) => state.user.user.friends);
  };

  return {
    createUser,
    getUser,
    logout,
    createServer,
    getServers,
    exitServer,
    addFriend,
    removeFriend,
    getFriends,
  };
};
