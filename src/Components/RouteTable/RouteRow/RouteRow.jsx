import React from 'react';

import "./route-row-style.scss";
import { LongArrowIcon } from "../../../assets/Icon";

function RouteRow({city, time, distance, street1, street2}) {
  return(
    <div className="route-row-wrapper">
      <span className="route-row-wrapper-title"><span></span>{city}</span>
      <span className="route-row-wrapper-distance route-row-wrapper-distance-small">{distance} km</span>
      <div className="route-row-wrapper-subwrapper">
        <span className="route-row-wrapper-subwrapper-icon">
          <LongArrowIcon />
        </span>
        <span>{street1}</span>
        <span></span>
        <span>{street2}</span>
      </div>
      <span className="route-row-wrapper-distance route-row-wrapper-distance-large">
        {time} 
        <span>min</span>
      </span>
    </div>
  );
}

export default RouteRow;
