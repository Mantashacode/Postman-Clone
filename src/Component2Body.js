import React from "react";

const Component2Body = ({ setjson }) => {
  return (
    <div className="container-fluid">
      <textarea
        rows="6"
        className="form-control z-depth-1"
        placeholder="write here.."
        onChange={(e) => setjson(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setjson(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Component2Body;
