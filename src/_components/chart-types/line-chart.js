import React from "react"
import { Line } from "react-chartjs-2"
import LineSettings from "../chart-settings/line-settings"
function LineChart(props) {
  console.log(props.state)
    const state = {
        labels: props.state.labels,
        datasets: props.state.datasets
      };
    return (
        <div className="chart-container">
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