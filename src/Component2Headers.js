import React from "react";
import JSONPretty from "react-json-pretty";

const Component2Headers = ({
  header,
  setHeaderKey,
  setHeaderValue,
  setHeaderData,
  removeHeader,
}) => {
  return (
    <div>
      <div className="tab-content p-3 border-top-0 border">
        <div className="input-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="key"
            onChange={(e) => setHeaderKey(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="value"
            onChange={(e) => setHeaderValue(e.target.value)}
          />
          <button
            type="button"
            id="data-remove-btn"
            className="btn btn-outline-danger"
            onClick={removeHeader}
          >
            Remove
          </button>
        </div>
        <button
          className="mt-2 btn btn-outline-success"
          type="button"
          onClick={setHeaderData}
        >
          Add
        </button>
        <div
          style={{
            color: "rgb(253, 88, 28)",
            fontSize: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="p-4"
        >
          <JSONPretty
            id="json-pretty"
            data={JSON.stringify(header)}
          ></JSONPretty>
        </div>
      </div>
    </div>
  );
};

export default Component2Headers;
