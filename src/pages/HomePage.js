import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

import BandAdd from "../components/BandAdd";
import BandList from "../components/BandList";

function HomePage() {
  // const [bands, setBands] = useState([]);

  const { online } = useContext(SocketContext);

  // // This is an custom event from our server
  // useEffect(() => {
  //   socket.on("current-bands", (bands) => {
  //     // console.table(bands);
  //     setBands(bands);
  //   });
  // }, [socket]);

  // const vote = (id) => {
  //   console.log(`votar app ${id}`);
  //   socket.emit("vote-band", id);
  // };

  // const deleteBand = (id) => {
  //   socket.emit("delete-band", id);
  // };

  // const updateName = (id, name) => {
  //   const newName = {
  //     id,
  //     name,
  //   };

  //   socket.emit("update-band-name", newName);
  // };

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
            {/* <BandList
              data={bands}
              vote={vote}
              deleteBand={deleteBand}
              updateNameBand={updateName}
            /> */}
          </div>
          <div className="col-4">{/* <BandAdd /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
