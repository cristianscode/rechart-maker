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
                <div className="input-row-item">
                <input type="color" className="colorPicker" value={i.backgroundColor} onChange={e => props.changeFunction(e, "backgroundColor", index)} />
                </div>
                <div className="input-row-item">
                <input type="color" className="colorPicker" value={i.borderColor} onChange={e => props.changeFunction(e, "borderColor", index)} />
                </div>
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
            if (element.style.display ==="none")
                document.getElementById(id).style.display = "block";
            else
                document.getElementById(id).style.display = "none";
        }
    }

    dataChange = (event, index, arrayIndex) => {
        this.setState(prevState => {
            var temp = [];
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
            var tempData = [];
            prevState.datasets.map((i, index) => {
                if (index !== prevState.datasets.length - 1)
                    tempData.push(i)
            })
            return {
                datasets: tempData
            }
        })
    }

    removeLabel = () => {
        this.setState(prevState => {
            var tempLabels = [];
            var tempData = [];
            prevState.labels.map((i, index) => {
                if (index < prevState.labels.length - 1)
                    tempLabels.push(i);
            })
            prevState.datasets.map(i => {
                var arr = i.data.map(d => { return d })
                arr.pop()
                var t = {
                    label: i.label,
                    data: arr,
                    fill: i.fill,
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor
                }
                tempData.push(t);
            })
            console.log(tempData)
            console.log(tempLabels)
            return {
                datasets: tempData,
                labels: tempLabels
            }
        })
    }

    addData = () => {
        this.setState(prevState => {
            var newData = {
                label: "New Set",
                data: prevState.datasets[0].data.map((i, index) => { return index * 5; }),
                fill: false,
                backgroundColor: "",
                borderColor: "#ffffff"
            }
            var tempData = [];
            prevState.datasets.map(i => {
                tempData.push(i)
            })
            tempData.push(newData)
            return {
                datasets: tempData
            }
        })
    }

    addLabel = () => {
        this.setState(prevState => {
            var tempLabels = [];
            var tempData = [];
            prevState.labels.map((i, index) => {
                tempLabels.push(i);
            })
            prevState.datasets.map((i, index) => {
                var arr = i.data.map(d => {
                    return d
                })
                arr.push(10);
                var t = {
                    label: i.label,
                    data: arr,
                    fill: i.fill,
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor
                }
                tempData.push(t);
            })
            tempLabels.push("New Col");
            return {
                datasets: tempData,
                labels: tempLabels
            }
        })
    }

    propertyChange = (event, key, index) => {
        this.setState(prevState => {
            if (key ==="fill") {
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

    updateLabel = (event, index) =>{
        this.setState(prevState => {
            var tempLabels = [];
            
            prevState.labels.map((i, currindex) => {
                if(currindex === index)
                    tempLabels.push(event.target.value)
                else tempLabels.push(i);
            })
            return {
                labels: tempLabels
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
                        <div id="dataset-dropdown" style={{ display: "none", margin: 25 }}>
                            <div className="dataset-table" style={{ width: "100%" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="input-row-item">Data for</div>
                                    {
                                        this.state.labels.map((l, index) => {
                                            return (
                                                <input type="text" value={l} className="input-row-item" key={index} onChange={e => this.updateLabel(e, index)} />
                                            )
                                        })
                                    }
                                </div>
                                <TableRowData datasets={this.state.datasets} updateData={this.dataChange} />
                                <div style={{ height: 50 }}>
                                    <div>
                                        <div className="add-input" style={{ float: "left" }} onClick={this.addData}><i className="fas fa-plus" /></div>
                                        <div className="add-input" style={{ float: "left" }} onClick={this.removeData}><i className="fas fa-minus" /></div>
                                        <div className="add-input" style={{ float: "left", backgroundColor: "rgba(206, 206, 206, 0.822)" }}>Edit Row</div>
                                    </div>
                                    <div>
                                        <div className="add-input" style={{ float: "right" }} onClick={this.addLabel}><i className="fas fa-plus" /></div>
                                        <div className="add-input" style={{ float: "right" }} onClick={this.removeLabel}><i className="fas fa-minus" /></div>
                                        <div className="add-input" style={{ float: "right", backgroundColor: "rgba(206, 206, 206, 0.822)" }}>Edit Col</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("settings-dropdown")}>Settings</div>
                        <div id="settings-dropdown" style={{ display: "none", margin: 25 }}>
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