import React from "react";
// import { useState } from "react";

const Component1 = ({ datafetch, setMethod, method, setUrl, url }) => {
  var configdata = (e) => {
    e.preventDefault();
    console.log(method);
    console.log(url);
    datafetch();
  };

  return (
    <div>
      <div className="p-4">
        <form onSubmit={configdata}>
          <div className="input-group mb-3">
            <select
              className="form-select flex-grow-0 w-auto"
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
              }}
            >
              <option value="get" defaultValue="get">
                GET
              </option>
              <option value="post">POST</option>
              <option value="put">PUT</option>
              <option value="delete">DELETE</option>
              <option value="copy">COPY</option>
              <option value="head">HEAD</option>
            </select>
            <input
              className="form-control"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Component1;
