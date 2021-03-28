import React, { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import GenericTableWrapper from "../GenericTableWrapper/GenericTableWrapper";

import { getRampAlgorithms } from "../../assets/mock-api";

function RampChart() {

  const [rampData, setRampData] = useState([]);

  // Mocking api request to fetch the routes data
  
  
  useEffect(() => {
    async function fetchData() {
      console.log('Running use effect now');
      const passed = (ramps) => {
        const result = ramps.reduce((acc, ramp) => {
          if (!acc[ramp.algorithm]) {
            acc[ramp.algorithm] = 1;
          } else {
            acc[ramp.algorithm] = +acc[ramp.algorithm] + 1;
          }
          return acc;
        }, {});

      
        const algoRampData = {
          labels: Object.keys(result),
          data: Object.values(result)
        }; 


        setRampData(algoRampData);
      };
      await getRampAlgorithms(passed);
    }
    fetchData();
  }, []);

  return (
    <GenericTableWrapper title="Ramp Chart">
      <div style={{ borderTop: '1px solid #242a31', paddingTop: '20px'}}>
        <DoughnutChart passedData={rampData}/>
        <h4 style={{'color': 'rgba(255,255,255,0.5)', paddingLeft: '20px'}}>Algoriths Data</h4>
      </div>
    </GenericTableWrapper>
  );
}

export default RampChart;
