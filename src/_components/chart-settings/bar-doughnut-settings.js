import React from "react";
import BarDoughnutChart from "../chart-types/bar-doughnut-chart";

function TableRow(props) {
    var extraColValue = "fillColor"
    if (document.getElementById("extraColSelect"))
        extraColValue = document.getElementById("extraColSelect").value
    var extraValue = props.values[extraColValue];
    const rows = props.values.labels.map((item, index) => {
        return (
            <div className="input-row" key={index}>
                <input type="text" className="input-row-item" value={item} onChange={(e) => props.f(e, "labels", index)} />
                <input type="text" className="input-row-item" value={props.values.data[index]} onChange={(e) => props.f(e, "data", index)} />
                <input type="text" className="input-row-item" value={extraValue[index]} onChange={(e) => props.f(e, extraColValue, index)} />
            </div>
        )
    })
    return rows
}

class BarDoughnutSettings extends React.Component {
    constructor(props) {
        var location = window.location.href.split("/");
        var chartType = location[location.length - 1]
        super(props)
        this.state = {
            extraCol: "fillColor",
            labels: ['January', 'February'],
            chartTitle: "My First Dataset",
            chartType: chartType,
            borderWidth: 2,
            fillColor: ["#48cae4", "#3E143E"],
            fillHover: ["#283845", "#283845"],
            borderColor: ["#00b4d8", "#00b4d8"],
            borderHover: ["#f1f1f1", "#f1f1f1"],
            data: [10, 59, 0],
            titleColor: "#666",
            showTitle: true
        }

    }

    toggleBarType(type) {
        this.setState(prevState => {
            if (type === "Vertical" || type === "Doughnut") {
                document.getElementById("chartType").className = "barType active";
                document.getElementById("chartAlt").className = "barType";
            } else {
                document.getElementById("chartAlt").className = "barType active";
                document.getElementById("chartType").className = "barType";
            }
            return { chartType: type }
        })
    }

    datasetChanged = (event, key, index) => {
        var v = event.target.value
        if (key === "data" && v !== '')
            v = parseInt(v)
        this.setState(prevState => {
            var temp = [];
            prevState[key].foreach((i, prevIndex) => {
                if (index === prevIndex)
                    temp.push(v);
                else temp.push(i)
            })
            if (key === "data") return { data: temp }
            else if (key === "labels") return { labels: temp }
            else if (key === "fillColor") return { fillColor: temp }
            else if (key === "fillHover") return { fillHover: temp }
            else if (key === "borderColor") return { borderColor: temp }
            else if (key === "borderHover") return { borderHover: temp }
        })
    }

    dataChange = (event, key) => {
        this.setState(prevState => {
            if (key === "fillColor" || key === "fillHover" || key === "borderColor" || key === "borderHover") {
                prevState[key] = prevState[key].map(i => {
                    return event.target.value
                })
            } else if (key === "showTitle") {
                prevState[key] = !prevState[key];
                console.log(prevState[key])
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
                labels: prevState.labels,
                showTitle: prevState.showTitle
            }
        })
    }

    toggleSettings(id) {
        if (document.getElementById(id)) {
            var element = document.getElementById(id);
            if (element.style.display === "none")
                document.getElementById(id).style.display = "block";
            else
                document.getElementById(id).style.display = "none";
        }
    }

    addRow = () => {
        this.setState(prevState => {
            var tempData = [];
            var tempLabel = [];
            var tempFill = [];
            var tempFillHover = [];
            var tempBorder = [];
            var tempBorderHover = [];
            prevState.labels.foreach((i, index) => {
                tempLabel.push(i)
                tempData.push(prevState.data[index])
                tempFill.push(prevState.fillColor[index])
                tempFillHover.push(prevState.fillHover[index])
                tempBorder.push(prevState.borderColor[index])
                tempBorderHover.push(prevState.borderHover[index])
            })
            tempData.push(10);
            tempData.push(0);
            tempLabel.push("Label");
            if (prevState.fillColor.length !== 0) {
                tempFill.push(prevState.fillColor[0])
                tempFillHover.push(prevState.fillHover[0])
                tempBorder.push(prevState.borderColor[0])
                tempBorderHover.push(prevState.borderHover[0])
            } else {
                tempFill.push("#48cae4");
                tempFillHover.push("#283845");
                tempBorder.push("#00b4d8");
                tempBorderHover.push("#f1f1f1");
            }
            return {
                data: tempData,
                labels: tempLabel,
                fillColor: tempFill,
                fillHover: tempFillHover,
                borderColor: tempBorder,
                borderHover: tempBorderHover
            }
        })
    }

    removeRow = () => {
        this.setState(prevState => {
            var tempData = [];
            var tempLabel = [];
            var tempFill = [];
            var tempFillHover = [];
            var tempBorder = [];
            var tempBorderHover = [];
            prevState.data.foreach((i, index) => {
                if (index !== prevState.data.length - 1)
                    tempData.push(i)
            })
            tempData[tempData.length - 1] = 0;
            prevState.labels.foreach((i, index) => {
                if (index !== prevState.labels.length - 1) {
                    tempLabel.push(i)
                    tempFill.push(prevState.fillColor[index])
                    tempFillHover.push(prevState.fillHover[index])
                    tempBorder.push(prevState.borderColor[index])
                    tempBorderHover.push(prevState.borderHover[index])
                }
            })
            return {
                data: tempData,
                labels: tempLabel,
                fillColor: tempFill,
                fillHover: tempFillHover,
                borderColor: tempBorder,
                borderHover: tempBorderHover
            }
        })
    }

    render = () => {
        var chartType = "Vertical";
        var chartTypeAlt = "Horizontal";
        var settingTitle = "Bar Chart Settings";
        var barChart = true;
        if (this.state.chartType.toLowerCase() === "doughnut" || this.state.chartType.toLowerCase() === "pie") {
            chartType = "Doughnut";
            chartTypeAlt = "Pie";
            settingTitle = "DoughPie Chart Settings"
            barChart = false;
        }
        return (
            <div style={{ display: "flex" }}>
                <div className="settings-sidebar">
                    <h2 className="text-center">{settingTitle}</h2>
                    <div style={{ display: "flex", marginBottom: 15 }}>
                        <div id="chartType" className="barType active" onClick={() => this.toggleBarType(chartType)}>{chartType}</div>
                        <div id="chartAlt" className="barType" onClick={() => this.toggleBarType(chartTypeAlt)}>{chartTypeAlt}</div>
                    </div>
                    <div>
                        <div className="settings-option-title" onClick={() => this.toggleSettings("dataset-dropdown")}>Dataset</div>
                        <div className="dataset-table" id="dataset-dropdown">
                            <div style={{ display: "flex" }}>
                                <div className="table-head-item">Label</div>
                                <div className="table-head-item">Value</div>
                                <div className="table-head-item">
                                    <select className="dataset-extraColSelect" id="extraColSelect" onChange={(e) => this.dataChange(e, "extraCol")}>
                                        <option value="fillColor" defaultValue>Fill</option>
                                        <option value="fillHover">Fill:Hover</option>
                                        <option value="borderColor">Border</option>
                                        <option value="borderHover">Border:Hover</option>
                                    </select>
                                </div>
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
                            {this.state.showTitle &&
                                <div className="settings-option">
                                    <label className="settings-option-label">Chart Title</label>
                                    <input type="text" value={this.state.chartTitle} onChange={(e) => this.dataChange(e, "chartTitle")} className="settings-option-input" style={{ width: 150 }} />
                                </div>
                            }
                            {/* Show Title */}
                            {!barChart &&
                                <div className="settings-option">
                                    <label className="settings-option-label">Show Title</label>
                                    <input type="checkbox" checked={this.state.showTitle} onChange={(e) => this.dataChange(e, "showTitle")} className="settings-option-input" />
                                </div>
                            }
                            {/* Border Width */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border Width</label>
                                <div style={{ display: "flex", float: "right" }}>
                                    <input type="text" value={this.state.borderWidth} onChange={(e) => this.dataChange(e, "borderWidth")} className="settings-option-input" />
                                px
                            </div>
                            </div>
                            {/* Background Color */}
                            {!barChart && this.state.showTitle &&
                                <div className="settings-option">
                                    <label className="settings-option-label">Title Color</label>
                                    <input type="color" value={this.state.titleColor} onChange={(e) => this.dataChange(e, "titleColor")} className="settings-option-input" style={{ border: "none" }} />
                                </div>
                            }
                            {/* Background Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Fill Color</label>
                                <input type="color" value={this.state.fillColor[0]} onChange={(e) => this.dataChange(e, "fillColor")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Background:hover Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Fill:hover Color</label>
                                <input type="color" value={this.state.fillHover[0]} onChange={(e) => this.dataChange(e, "fillHover")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Border Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border Color</label>
                                <input type="color" value={this.state.borderColor[0]} onChange={(e) => this.dataChange(e, "borderColor")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                            {/* Border:hover Color */}
                            <div className="settings-option">
                                <label className="settings-option-label">Border:hover Color</label>
                                <input type="color" value={this.state.borderHover[0]} onChange={(e) => this.dataChange(e, "borderHover")} className="settings-option-input" style={{ border: "none" }} />
                            </div>
                        </form>
                    </div>
                </div>
                <BarDoughnutChart values={this.state} handleChange={this.dataChange} />
            </div>

        )
    }
}

export default BarDoughnutSettings