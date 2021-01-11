import React from "react"
import { HorizontalBar, Bar, Doughnut, Pie } from "react-chartjs-2"

function SettingsToString(props) {
    if (props.type.toLowerCase() === "pie" || props.type.toLowerCase() === "doughnut") {
        return (
            <div>
                <p>
                    {"const state = {"}<br />
                &emsp;&emsp;{"labels: [" + props.state.labels.map(item => { return "'" + item + "'"; }) + "],"}<br />
                &emsp;&emsp;{"datasets: [{"} <br />
                &emsp;&emsp;&emsp;&emsp;{"backgroundColor: [" + props.state.datasets[0].backgroundColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderColor: [" + props.state.datasets[0].borderColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"borderWidth: " + props.state.datasets[0].borderWidth}, <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBackgroundColor: [" + props.state.datasets[0].hoverBackgroundColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"hoverBorderColor: [" + props.state.datasets[0].hoverBorderColor.map(item => { return "'" + item + "'"; }) + "],"} <br />
                &emsp;&emsp;&emsp;&emsp;{"data: [" + props.state.datasets[0].data + "]"} <br />
                &emsp;&emsp;{"}]"}<br />
                    {"}"}
                </p>
                {props.options.title.display &&
                    <p>
                        {"const options = {"}<br />
                            &emsp;&emsp;{"title: {"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"display: " + props.options.title.display + ","} <br />
                            &emsp;&emsp;&emsp;&emsp;{"text: '" + props.options.title.text + "' ,"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"position: '" + props.options.title.position + "' ,"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"fontColor: '" + props.options.title.fontColor + "' ,"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"fontSize: 22,"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"fontFamily: \"'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'\","}<br />
                            &emsp;&emsp;&emsp;&emsp;{"padding: 20,"} <br />
                            &emsp;&emsp;&emsp;&emsp;{"lineHeight: 1.2"} <br />
                            &emsp;&emsp;{"}"}<br />
                        {"}"}
                    </p>
                }
            </div>
        )
    } else {

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
}

function GetChart(props) {
    if (props.type.toLowerCase() === "vertical" || props.type.toLowerCase() === "bar") return <Bar data={props.state} />
    else if (props.type.toLowerCase() === "doughnut") return <Doughnut data={props.state} options={props.options} />
    else if (props.type.toLowerCase() === "pie") return <Pie data={props.state} options={props.options} />
    else return <HorizontalBar data={props.state} />
}

function BarDoughnutChart(props) {
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
                data: props.values.data,
                fontColor: props.values.titleColor
            }
        ]
    }


    const options = {
        title: {
            display: props.values.showTitle,
            text: props.values.chartTitle,
            position: 'top',
            fontColor: props.values.titleColor,
            fontSize: 22,
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
            padding: 20,
            lineHeight: 1.2

        }
    }

    return (
        <div className="chart-container">
            {/* <BarSettings /> */}
            <div className="right-side">
                <div className="center">
                    <GetChart state={state} type={props.values.chartType} options={options} />
                </div>
                <div className="code-container">
                    <code id="code-state">
                        <SettingsToString state={state} type={props.values.chartType} options={options} />
                    </code>
                </div>
            </div>
        </div>
    )
}

export default BarDoughnutChart