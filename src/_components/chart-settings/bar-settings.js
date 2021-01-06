import React from "react";
import BarChart from "../chart-types/bar-chart"

function TableRow(props) {
    const rows = props.values.labels.map((item, index) => {
        return (
            <div className="input-row" key={index}>
                <input type="text" className="input-row-item" value={item} onChange={(e) => props.f(e, "labels", index)} />
                <input type="text" className="input-row-item" value={props.values.data[index]} onChange={(e) => props.f(e, "data", index)} />
                <input type="text" className="input-row-item" value={props.values.fillColor[index]} onChange={(e) => props.f(e, "fillColor", index)} />
            </div>
        )
    })
    return rows
}

class BarSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['January', 'February'],
            chartTitle: "My First Dataset",
            chartType: "Vertical",
            borderWidth: 2,
            fillColor: ["#48cae4", "#3E143E"],
            fillHover: "#A197FB",
            borderColor: "#00b4d8",
            borderHover: "#f1f1f1",
            data: [10, 59, 0]
        }

    }

    toggleBarType(type) {
        this.setState(prevState => {
            if(type == "Vertical") {
                document.getElementById("verticalBar").className = "barType active";
                document.getElementById("horizontalBar").className = "barType";
            }else{
                document.getElementById("horizontalBar").className = "barType active";
                document.getElementById("verticalBar").className = "barType";
            }
            return {chartType: type}
        })
    }

    datasetChanged = (event, key, index) => {
        var v = event.target.value
        if (key === "data" && v != '')
            v = parseInt(v)
        this.setState(prevState => {
            var temp = new Array();
            prevState[key].map((i, prevIndex) => {
                if (index == prevIndex)
                    temp.push(v);
                else temp.push(i)
            })
            if (key == "data") return { data: temp }
            else if (key == "labels") return { labels: temp }
            else if (key == "fillColor") return { fillColor: temp }
        })
    }

    dataChange = (event, key) => {
        this.setState(prevState => {
            if (key == "fillColor") {
                prevState[key] = prevState[key].map(i => {
                    return event.target.value
                })
            } else
                prevState[key] = event.target.value;
            return {
                chartTitle: prevState.chartTitle,
                borderWidth: prevState.borderWidth,
                fillColor: prevState.fillColor,
                fillHover: prevState.fillHover,
                borderColor: prevState.borderColor,
                borderHover: prevState.borderHover,
                data: prevState.data,
                labels: prevState.labels
            }
        })
    }

    toggleSettings(id) {
        console.log(id)
        if (document.getElementById(id)) {
            var element = document.getElementById(id);
            if (element.style.display == "none")
                document.getElementById(id).style.display = "block";
            else
                document.getElementById(id).style.display = "none";
        }
    }

    addRow = () => {
        this.setState(prevState => {
            var tempData = new Array();
            var tempLabel = new Array();
            var tempFill = new Array();
            prevState.data.map(i => {
                tempData.push(i)
            })
            prevState.labels.map(i => {
                tempLabel.push(i)
            })
            prevState.fillColor.map(i => {
                tempFill.push(i)
            })
            tempData.push(0);
            tempLabel.push("Label");
            tempFill.push("#48cae4");
            return {
                data: tempData,
                labels: tempLabel,
                fillColor: tempFill
            }
        })
    }

    removeRow = () => {
        this.setState(prevState => {
            var tempData = new Array();
            var tempLabel = new Array();
            var tempColor = new Array();
            prevState.data.map((i, index) => {
                if (index != prevState.data.length - 1)
                    tempData.push(i)
            })
            tempData[tempData.length - 1] = 0;
            prevState.labels.map((i, index) => {
                if (index != prevState.labels.length - 1)
                    tempLabel.push(i)
            })
            prevState.fillColor.map((i, index) => {
                if (index != prevState.fillColor.length - 1)
                    tempColor.push(i)
            })
            return {
                data: tempData,
                labels: tempLabel
            }
        })
    }

    render = () => {
        return (
            <div style={{ display: "flex" }}>
                <div className="settings-sidebar">
                    <h1 className="text-center">Bar Chart Settings</h1>
                    <div style={{ display: "flex", marginBottom: 15 }}>
                        <div id="verticalBar" className="barType active" onClick={() => this.toggleBarType("Vertical")}>Vertical</div>
                        <div id="horizontalBar" className="barType" onClick={() => this.toggleBarType("Horizontal")}>Horizontal</div>
                    </div>
                    <div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("dataset-dropdown")}>Dataset</div>
                        <div className="dataset-table" id="dataset-dropdown">
                            <div style={{ display: "flex" }}>
                                <div className="table-head-item">Label</div>
                                <div className="table-head-item">Value</div>
                                <div className="table-head-item">Fill</div>
                            </div>
                            <TableRow values={this.state} f={this.datasetChanged} />
                            <div className="add-input" onClick={this.addRow}><i className="fas fa-plus" /></div>
                            <div className="add-input" onClick={this.removeRow}><i className="fas fa-minus" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("settings-dropdown")}>Settings</div>
                        <form className="settings-options" id="settings-dropdown">
                            {/* Chart Title */}
                            <div className="settings-option">
                                <label className="settings-option-label">Chart Title</label>
                                <input type="text" value={this.state.chartTitle} onChange={(e) => this.dataChange(e, "chartTitle")} className="settings-option-input" style={{ width: 150 }} />
                            </div>
                            {/* Border Width */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border Width</label>
                                <div style={{ display: "flex", float: "right" }}>
                                    <input type="text" value={this.state.borderWidth} onChange={(e) => this.dataChange(e, "borderWidth")} className="settings-option-input" />
                                px
                            </div>
                            </div>
                            {/* Background Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Fill Color</label>
                                <input type="color" value={this.state.fillColor} onChange={(e) => this.dataChange(e, "fillColor")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Background:hover Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Fill:hover Color</label>
                                <input type="color" value={this.state.fillHover} onChange={(e) => this.dataChange(e, "fillHover")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Border Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border Color</label>
                                <input type="color" value={this.state.borderColor} onChange={(e) => this.dataChange(e, "borderColor")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Border:hover Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border:hover Color</label>
                                <input type="color" value={this.state.borderHover} onChange={(e) => this.dataChange(e, "borderHover")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                        </form>
                    </div>
                </div>
                <BarChart values={this.state} handleChange={this.dataChange} />
            </div>

        )
    }
}

export default BarSettings