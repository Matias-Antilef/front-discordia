import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../models/routes";
import { UserModel } from "@/models/user.model";
interface UserContextType {
  user: UserModel | null;
  createUser: ({ status, username }: UserModel) => void;
  logout: () => void;
}

export const userContext = React.createContext<UserContextType | undefined>(
  undefined
);

type UserProviderProps = {
  children: ReactNode;
};

export function useUserContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de un UserProvider");
  }
  return context;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserModel | null>({
    status: "",
    username: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("status");
    const username = localStorage.getItem("username");

    if (status && username) {
      setUser({ username, status });
    }
  }, []);

  function createUser({ status, username }: UserModel) {
    setUser({ username, status });

    localStorage.setItem("status", status);
    localStorage.setItem("username", username);
  }

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate(PublicRoutes.LOGIN);
  }

  return (
    <userContext.Provider value={{ user, createUser, logout }}>
      {children}
    </userContext.Provider>
  );
}
