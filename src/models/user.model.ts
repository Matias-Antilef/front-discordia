export interface UserModel {
  username: string;
  status: string;
  servers: ServerModel[];
  friends: string[];
}

export interface ServerModel {
  name: string;
  description?: string;
}
