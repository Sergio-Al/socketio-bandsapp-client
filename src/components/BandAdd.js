import React from "react";

const BandAdd = () => {
  return (
    <>
      <h3>Add Band</h3>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="new band's name"
        />
      </form>
    </>
  );
};

export default BandAdd;
