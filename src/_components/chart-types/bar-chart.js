import React from "react"
import BarSettings from "../chart-settings/bar-settings"
import { HorizontalBar, Bar, Doughnut, Line } from "react-chartjs-2"

function SettingsToString(props) {
    return (
        <div>
            <p>
                {"const state = {"}<br />
                &emsp;&emsp;{"labels: [" + props.state.labels.map(item => { return "'" + item + "'"; }) + "],"}<br />
                &emsp;&emsp;{"datasets: [{"} <br />
                &emsp;&emsp;&emsp;&emsp;{"label: '" + props.state.datasets[0].label + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"backgroundColor: [" + props.state.datasets[0].backgroundColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderColor: [" + props.state.datasets[0].borderColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderWidth: " + props.state.datasets[0].borderWidth}, <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBackgroundColor: [" + props.state.datasets[0].hoverBackgroundColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBorderColor: [" + props.state.datasets[0].hoverBorderColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"data: [" + props.state.datasets[0].data + "]"} <br />
                &emsp;&emsp;{"}]"}<br />
                {"}"}
            </p>
        </div>
    )
}

function GetChart(props){
    if(props.type == "Vertical")
        return <Bar data={props.state} />
    return <HorizontalBar data={props.state} />
}

function BarChart(props) {
    const state = {
        labels: props.values.labels,
        datasets: [
            {
                type: props.values.type,
                label: props.values.chartTitle,
                backgroundColor: props.values.fillColor,
                borderColor: props.values.borderColor,
                borderWidth: props.values.borderWidth,
                hoverBackgroundColor: props.values.fillHover,
                hoverBorderColor: props.values.borderHover,
                data: props.values.data
            }
        ]
    }

    return (
        <div className="chart-container">
            {/* <BarSettings /> */}
            <div className="right-side">
                <div className="center">
                    <GetChart state={state} type={props.values.chartType} />
                </div>
                <div className="code-container">
                    <code id="code-state">
                        <SettingsToString state={state} />
                    </code>
                </div>
            </div>
        </div>
    )
}

export default BarChart