import { userType } from "@/types";
import React, { useContext } from "react";

interface userContextInterface {
  user: userType | null;
  setUser: Function;
}

export const UserContext = React.createContext<userContextInterface>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  const user = useContext(UserContext);
  return { user };
};
