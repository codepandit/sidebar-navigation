import React, { useEffect } from 'react'
import Chart from "chart.js";

function DoughnutChart(props) {
  const chartRef = React.createRef();
  const {labels, data} = props.passedData;
  const chartData = {
    // labels: ["A1", "A2", "A3", "A4", "A5"],
    labels,
    // //Bring in data
    datasets: [
      {
          // data: [86, 67, 91, 36, 55],
          data,
          backgroundColor: [
            '#24b4aa',
            '#6fd8d1',
            '#93e2dd',
            '#b1e3e0',
            '#f1f8fe',
          ],
          hoverBackgroundColor: [
            '#24b4aa',
            '#6fd8d1',
            '#93e2dd',
            '#b1e3e0',
            '#f1f8fe',
          ],
      }
    ]
  };

  const buildChart = () => {
    const doughnutChartRef = chartRef.current.getContext('2d');

    // if (typeof doughnutChartRef !== "undefined") doughnutChartRef.destroy();

    new Chart(doughnutChartRef, {
        type: "doughnut",
        data: chartData,
        options: {
            //Customize chart options
            cutoutPercentage: 70,
            legend : {
              display: false,
            },
            animation: {
              duration: 0,
            },
        }
    });
  }
  
  useEffect(() => {
    buildChart();
  }, [labels, data]);

  return (
    <div>
      <canvas 
        ref={chartRef}
        width="10px"
        height="10px"
      />
    </div>
  );

}


export default DoughnutChart;