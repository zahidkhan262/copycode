import React from "react";

const BgColor = ({ bgColorName }) => {
  return (
    <div className="containers">
      <div className="flip-card" style={{ background: bgColorName }}>
        <div class="flip-card-inner">
          <div className="flip-card-front"></div>
          <div class="flip-card-back">
            <button className="copy-btn">copyCode</button>
            <p>copyCode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgColor;
