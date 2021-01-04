import React from "react"
import BarSettings from "../chart-settings/bar-settings"
import { HorizontalBar, Bar } from "react-chartjs-2"

function SettingsToString(props) {
    return (
        <div>
            <p>
                {"const state = {"}<br />
                &emsp;&emsp;{"labels: [" + props.state.labels.map(item => { return "'" + item + "'"; }) + "],"}<br />
                &emsp;&emsp;{"datasets: [{"} <br />
                &emsp;&emsp;&emsp;&emsp;{"label: '" + props.state.datasets[0].label + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"backgroundColor: '" + props.state.datasets[0].backgroundColor + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderColor: '" + props.state.datasets[0].borderColor + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderWidth: " + props.state.datasets[0].borderWidth}, <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBackgroundColor: '" + props.state.datasets[0].hoverBackgroundColor + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBorderColor: '" + props.state.datasets[0].hoverBorderColor + "',"} <br />
                &emsp;&emsp;&emsp;&emsp;{"data: [" + props.state.datasets[0].data + "]"} <br />
                &emsp;&emsp;{"}]"}<br />
                {"}"}
            </p>
        </div>
    )
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
                <div className="center"><Bar data={state} /></div>
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