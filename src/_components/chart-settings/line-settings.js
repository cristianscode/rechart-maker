import React from "react";
import LineChart from "../chart-types/line-chart";

class LineSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }


    toggleSettings = (id) => {
        if (document.getElementById(id)) {
            var element = document.getElementById(id);
            if (element.style.display == "none")
                document.getElementById(id).style.display = "block";
            else
                document.getElementById(id).style.display = "none";
        }
    }

    dataChange = (event, key) => {
        return 0;
    }

    render = () => {
        return (
            <div style={{ display: "flex" }}>
                <div className="settings-sidebar">
                    <h1>Line Chart Settings</h1>
                    <div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("settings-dropdown")}>Settings</div>
                    </div>
                </div>
                <LineChart state={this.state} />
            </div >
        )
    }
}


export default LineSettings