import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
  const [value, setValue] = useState("");
  const { socket } = useContext(SocketContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length > 0) {
      socket.emit("create-new-band", { name: value });
      setValue("");
    }
  };
  return (
    <>
      <h3>Add Band</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="new band's name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
