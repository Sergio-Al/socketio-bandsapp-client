import React, { useState } from "react";
import { useSocket } from "../hooks/useSocket";

const BandAdd = () => {
  const [value, setValue] = useState("");
  const { socket } = useSocket("http://localhost:8080");

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
