import { FriendModel, ServerModel, UserModel } from "@/models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userSlice {
  user: UserModel;
}

const initialState: userSlice = {
  user: {
    username: "",
    friends: [],
    servers: [],
    status: "offline",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetUser: (state, action: PayloadAction<UserModel>) => {
      state.user = { ...action.payload };
    },
    Logout: (state) => {
      state.user = initialState.user;
    },
    CreateServer(state, action: PayloadAction<ServerModel>) {
      state.user.servers.push(action.payload);
    },
    ExitServer(state, action: PayloadAction<ServerModel>) {
      state.user.servers = state.user.servers.filter(
        (server) => server.name !== action.payload.name
      );
    },
    AddFriend(state, action: PayloadAction<FriendModel>) {
      state.user.friends.push(action.payload);
    },
    RemoveFriend(state, action: PayloadAction<FriendModel>) {
      state.user.friends = state.user.friends.filter(
        (friend) => friend.username !== action.payload.username
      );
    },
  },
});

export const {
  SetUser,
  Logout,
  CreateServer,
  ExitServer,
  AddFriend,
  RemoveFriend,
} = userSlice.actions;

export default userSlice.reducer;
