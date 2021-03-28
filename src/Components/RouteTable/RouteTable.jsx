import React, { useState, useEffect } from "react";
import { mockRouteData } from "../../assets/mock-api";
import RouteRow from "./RouteRow/RouteRow";
import GenericTableWrapper from "../GenericTableWrapper/GenericTableWrapper";

function RouteTable() {

  const [routeData, setRouteData] = useState([]);

  // Mocking api request to fetch the routes data
  async function fetchData() {
    await mockRouteData()
      .then((response) => setRouteData(response))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GenericTableWrapper title="Delayed Routes">
      {routeData.map(({city, time, distance, street1, street2}, key) => (
        <RouteRow 
          key={key}
          city={city}
          time={time}
          distance={distance}
          street1={street1}
          street2={street2}
        />
      ))}
    </GenericTableWrapper>
  );
}

export default RouteTable;
