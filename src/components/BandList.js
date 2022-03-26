import React from "react";

const BandList = () => {
  const createRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary"> +1 </button>
        </td>
        <td>
          <input className="form-control" />
        </td>
        <td>
          <h3>14</h3>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <h3>Current Bands</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Current</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
