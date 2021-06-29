import React from "react";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <div>
            <h3>SkyHigh Sales Report</h3>
            <Link to="/salesdata" className="btn-primary">
              Fetch Sales Data
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
