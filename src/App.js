import { useState, useEffect } from "react";
import io from "socket.io-client";

import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    console.log(socket);
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

  // This is an custom event from our server
  useEffect(() => {
    socket.on("current-bands", (bands) => {
      // console.table(bands);
      setBands(bands);
    });
  }, [socket]);

  const vote = (id) => {
    console.log(`votar app ${id}`);
    socket.emit("vote-band", id);
  };

  const deleteBand = (id) => {
    socket.emit("delete-band", id);
  };

  const updateName = (id, name) => {
    const newName = {
      id,
      name,
    };

    socket.emit("update-band-name", newName);
  };

  const createBand = (name) => {
    socket.emit("create-new-band", { name });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="alert">
          <p>
            Service Status
            {online ? (
              <span className="text-success"> Online</span>
            ) : (
              <span className="text-danger"> Offline</span>
            )}
          </p>
        </div>
        <h1>BandNames</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <BandList
              data={bands}
              vote={vote}
              deleteBand={deleteBand}
              updateNameBand={updateName}
            />
          </div>
          <div className="col-4">
            <BandAdd createBand={createBand} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
