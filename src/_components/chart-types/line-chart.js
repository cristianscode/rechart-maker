import React from "react"
import { Line } from "react-chartjs-2"
import LineSettings from "../chart-settings/line-settings"
function LineChart() {
    const state = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
    return (
        <div className="chart-container">
            <LineSettings />
            <div>
                <div className="center"><Line data={state} /></div>
                <div className="code-container">
                    <code>Code</code>
                </div>
            </div>
        </div>
    )
}

export default LineChart