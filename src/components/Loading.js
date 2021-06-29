import React from "react";
import loadingGif from "../assets/loading-giphy.gif";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <h3>Fetching sales data</h3>
        <img src={loadingGif} alt="" />
      </div>
    </>
  );
};

export default Loading;
