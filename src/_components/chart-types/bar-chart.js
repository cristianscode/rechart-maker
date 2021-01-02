import React from "react"
import BarSettings from "../chart-settings/bar-settings"
import { HorizontalBar } from "react-chartjs-2"

function BarChart() {
    const state = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }

    return (
        <div className="chart-container">
            <BarSettings />
            <div>
                <div className="center"><HorizontalBar data={state} /></div>
                <div className="code-container">
                    <code>Code</code>
                </div>
            </div>
        </div>
    )
}

export default BarChart