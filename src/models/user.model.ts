export interface UserModel {
  username: string;
  status: string;
  servers: ServerModel[];
  friends: FriendModel[];
}

export interface ServerModel {
  name: string;
  description?: string;
}

export interface FriendModel {
  username: string;
}
