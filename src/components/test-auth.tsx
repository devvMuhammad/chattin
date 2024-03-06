"use client";
import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type contextType = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const testUserContext = createContext<contextType>({
  user: "",
  setUser: () => "",
});

export default function TestUserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState("Muhammad Amjad");
  return (
    <testUserContext.Provider value={{ user, setUser }}>
      {children}
    </testUserContext.Provider>
  );
}

export function useTestAuthContext() {
  const { user, setUser } = useContext(testUserContext);
  return { user, setUser };
}
