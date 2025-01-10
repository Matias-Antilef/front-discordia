import { ServerModel, UserModel } from "@/models/user.model";
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
  },
});

export const { SetUser, Logout, CreateServer } = userSlice.actions;

export default userSlice.reducer;
