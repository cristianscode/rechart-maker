import React from "react"
import BarSettings from "../chart-settings/bar-settings"
import { HorizontalBar, Bar } from "react-chartjs-2"

function BarChart(props) {
    console.log(props.values)
    const state = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: props.values.chartTitle,
                backgroundColor: props.values.fillColor,
                borderColor: props.values.borderColor,
                borderWidth: props.values.borderWidth,
                hoverBackgroundColor: props.values.fillHover,
                hoverBorderColor: props.values.borderHover,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }

    return (
        <div className="chart-container">
            {/* <BarSettings /> */}
            <div className="right-side">
                <div className="center"><Bar data={state} /></div>
                <div className="code-container">
                    <code id="code-state">
                        {JSON.stringify(state)}
                    </code>
                </div>
            </div>
        </div>
    )
}

export default BarChart