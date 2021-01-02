import React from "react"
import { Doughnut } from "react-chartjs-2"
import DoughnutSettings from "../chart-settings/doughnut-settings"
function DoughnutChart() {
    const state = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }],
        text: '23%'
    };
    return (
        <div className="chart-container">
            <DoughnutSettings />
            <div>
                <div className="center"><Doughnut data={state} /></div>
                <div className="code-container">
                    <code>Code</code>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart