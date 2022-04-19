import React from "react";

const SideComponent = ({ historyData }) => {
  console.log(historyData);
  return (
    <div>
      <div className="side-component">
        <div className="history">
          <i className="bi bi-clock-history"></i>
          <h5>History</h5>
          {historyData.map((value) => {
            return (
              <div className="history-content">
                <h6>{value}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
