import React from "react";

import Weather from "./Weather/Weather.jsx";
import RouteTable from "../RouteTable/RouteTable";
import RampChart from "../RampChart/RampChart";
import "./sidebar-style.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Weather />
      <RouteTable />
      <RampChart />
    </div>
  );
}

export default Sidebar;
