import { UserDTO } from "@dtos/UserDTO";
import { Children, createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContexteProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContexteProviderProps) {
  const [user, setUser] = useState({
    id: "1",
    name: "Ramon",
    email: "ramon@email.com",
    avatar: "ramon.png",
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
