import React from "react";

const Component1QueryParams = ({
  setParamKey,
  paramKey,
  setParamValue,
  paramValue,
  ParamData,
}) => {
  const paramSubmit = (e) => {
    e.preventDefault();
    //for empty the fields but its not working
    setParamKey("");
    setParamValue("");
  };
  return (
    <div className="tab-content p-3 border-top-0 border">
      <form onSubmit={paramSubmit}>
        <div className="input-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="key"
            value={paramKey}
            onChange={(e) => {
              setParamKey(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="value"
            value={paramValue}
            onChange={(e) => {
              setParamValue(e.target.value);
            }}
          />
        </div>
        <button
          className="mt-2 btn btn-outline-success"
          type="button"
          onClick={ParamData}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Component1QueryParams;
