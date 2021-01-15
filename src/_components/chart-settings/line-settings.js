import React from "react";
import LineChart from "../chart-types/line-chart";

function TableRow(props) {
    var values = props.state.datasets.map((i, index) => {
        return (
            <div className="input-row" key={index}>
                <input type="text" className="input-row-item" value={i.label} onChange={e => props.changeFunction(e, "label", index)} />
                <div className="input-row-item">
                    <input type="checkbox" checked={i.fill} onChange={e => props.changeFunction(!i.fill, "fill", index)} />
                </div>
                <input type="text" className="input-row-item" value={i.backgroundColor} onChange={e => props.changeFunction(e, "backgroundColor", index)} />
                <input type="text" className="input-row-item" value={i.borderColor} onChange={e => props.changeFunction(e, "borderColor", index)} />
            </div>
        )
    })
    return values
}

function TableRowData(props) {
    var inputs = props.datasets.map((i, index) => {
        return (
            <div className="input-row" key={index}>
                <input type="text" className="input-row-item" value={i.label} disabled />
                {i.data.map((d, arrayIndex) => {
                    return (
                        <input type="text" key={arrayIndex} className="input-row-item" value={d} onChange={e => props.updateData(e, index, arrayIndex)} />
                    )
                })
                }
            </div>
        )
    })
    return inputs
}

class LineSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "First dataset",
                    data: [33, 25, 35, 51, 54, 76],
                    fill: false,
                    backgroundColor: "",
                    borderColor: "#C856C8"
                },
                {
                    label: "Second dataset",
                    data: [33, 53, 85, 41, 44, 65],
                    fill: true,
                    backgroundColor: "#4CE0D2",
                    borderColor: "#48cae4"
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

    dataChange = (event, index, arrayIndex) => {
        this.setState(prevState => {
            var temp = new Array();
            prevState.datasets[index].data.map((i, index) => {
                if (arrayIndex === index)
                    temp.push(parseInt(event.target.value));
                else temp.push(i)
            })
            prevState.datasets[index].data = temp
            return {
                datasets: prevState.datasets
            }
        })
    }

    removeData = () => {
        this.setState(prevState => {
            var tempData = new Array();
            prevState.datasets.map((i, index) => {
                if (index != prevState.datasets.length - 1)
                    tempData.push(i)
            })
            return {
                datasets: tempData
            }
        })
    }

    addData = (event) => {
        this.setState(prevState => {
            var newData = {
                label: "New Set",
                data: [5, 10, 15, 20, 25, 30],
                fill: false,
                backgroundColor: "",
                borderColor: "#ffffff"
            }
            var tempData = new Array();
            prevState.datasets.map(i => {
                tempData.push(i)
            })
            tempData.push(newData)
            return {
                datasets: tempData
            }
        })
    }

    propertyChange = (event, key, index) => {
        this.setState(prevState => {
            if (key == "fill"){
                prevState.datasets[index][key] = event
                prevState.datasets[index]["backgroundColor"] = "#FFFFFF"
            }
            else
                prevState.datasets[index][key] = event.target.value

            return {
                datasets: prevState.datasets
            }
        })
    }

    render = () => {
        return (
            <div>
                <div className="line-settings-sidebar">
                    <h1>Line Chart Settings</h1>
                    <div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("dataset-dropdown")}>Dataset</div>
                        <div id="dataset-dropdown">
                            <div className="dataset-table" style={{ width: "100%" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="table-head-item">Data for</div>
                                    {
                                        this.state.labels.map((l, index) => {
                                            return (
                                                <div className="table-head-item" key={index}>{l}</div>
                                            )
                                        })
                                    }
                                </div>
                                <TableRowData datasets={this.state.datasets} updateData={this.dataChange} />
                                <div className="add-input" onClick={this.addData}><i className="fas fa-plus" /></div>
                                <div className="add-input" onClick={this.removeData}><i className="fas fa-minus" /></div>
                            </div>
                        </div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("settings-dropdown")}>Settings</div>
                        <div id="settings-dropdown">
                            <div className="dataset-table" style={{ width: "100%" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="table-head-item">Label</div>
                                    <div className="table-head-item">Fill?</div>
                                    <div className="table-head-item">Background Color</div>
                                    <div className="table-head-item">Outline</div>
                                </div>
                                <TableRow state={this.state} changeFunction={this.propertyChange} />
                                <div className="add-input" onClick={this.addData}><i className="fas fa-plus" /></div>
                                <div className="add-input" onClick={this.removeData}><i className="fas fa-minus" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <LineChart state={this.state} />
            </div >
        )
    }
}


export default LineSettings