import React from "react";
import "../../styles/dashbaord.css";

function Rcomponent() {
  return (
    <div>
      <div className="francs flex justify-center py-12 shadow-2xl">
        <br />
        <h1 className="white-me text-4xl">
          5000 $ / <span className="today">Month</span>
        </h1>
      </div>
    </div>
  );
}

export default Rcomponent;
