import React from "react";
import BarChart from "../chart-types/bar-chart"
class BarSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartTitle: "Hello",
            borderWidth: 2,
            fillColor: "#e76f51",
            fillHover: "#fffff",
            borderColor: "#e76f51",
            borderHover: "#fffff",
        }

    }
    dataChange = (event, key) => {
        // For loop all states
        // if key matches value item then update
        this.setState(prevState => {
            prevState[key] = event.target.value;
            return {
                chartTitle: prevState.chartTitle,
                borderWidth: prevState.borderWidth,
                fillColor: prevState.fillColor,
                fillHover: prevState.fillHover,
                borderColor: prevState.borderColor,
                borderHover: prevState.borderHover
            }
        })
    }

    render = () => {
        return (
            <div style={{ display: "flex" }}>

                <div className="settings-sidebar">
                    <h1 className="text-center">Report Settings</h1>
                    <div className="settings-option-title">Dataset</div>
                    <div>
                        <div className="settings-option-title">Settings</div>
                        <form className="settings-options">
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