import React from "react";
import JSONPretty from "react-json-pretty";

const Component3 = ({ data, status, error }) => {
  return (
    <div className="response">
      <div className="line"></div>
      <div className="container-fluid">
        <p
          id="status"
          className={
            status >= 201 ? "btn btn-outline-danger" : "btn btn-outline-success"
          }
        >
          Status:{status}
        </p>
        <p>
          <JSONPretty id="json-pretty" data={error ? error : data}></JSONPretty>
        </p>
      </div>
      {/* <textarea
        rows="10"
        className="form-control z-depth-1"
        placeholder="Response"
      ></textarea> */}
    </div>
  );
};

export default Component3;
