import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

// we create the context
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
