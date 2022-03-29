import { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath) => {
  // use memo avoid to send a new connection for every action in our frontend
  const socket = useMemo(
    () =>
      io.connect(serverPath, {
        transports: ["websocket"],
      }),
    [serverPath]
  );
  const [online, setOnline] = useState(false);

  useEffect(() => {
    console.log(socket);
    // this is when we connect to the socket
    setOnline(socket.connected);
  }, [socket]);

  // This events are native in socket object
  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
