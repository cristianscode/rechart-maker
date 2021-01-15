import React from "react"
import { Line } from "react-chartjs-2"

function SettingsToString(props) {
    return (
        <p>
            {"const state = {"}<br />
    &emsp;&emsp;{"labels: [" + props.state.labels.map(item => { return "'" + item + "'"; }) + "],"}<br />
    &emsp;&emsp;{"datasets: ["} <br />
            {
                props.state.datasets.map(i => {
                    return (
                        <div>
                            &emsp;&emsp;&emsp;&emsp;{"{"} <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"label: '" + i.label + "'"}, <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"data: [" + i.data.map(item => { return item; }) + "]"}, <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"fill: " + i.fill}, <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"backgroundColor: '" + i.backgroundColor + "'"}, <br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"borderColor: '" + i.borderColor + "'"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"},"} <br />
                        </div>

                    )
                })
            }
    &emsp;&emsp;{"]"}<br />
            {"}"}
        </p>
    )
}

function LineChart(props) {
    console.log(props.state)
    const state = {
        labels: props.state.labels,
        datasets: props.state.datasets
    };
    return (
        <div className="chart-container">
            <div className="line-container">
                <div className="center"><Line data={state} /></div>
                <div className="code-container">
                    <code>
                        <SettingsToString state={state} />
                    </code>
                </div>
            </div>
        </div>
    )
}

export default LineChart