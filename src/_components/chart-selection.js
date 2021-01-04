import React from "react";
import { Link } from "react-router-dom";
function ChartSelection() {
    return (
        <div>
            <h1 className="text-center selection-title">Select Chart</h1>
            <div style={{ display: "flex" }}>
                <Link to="/bar">
                    <div className="chart-option">
                        <i class="fas fa-chart-bar fa-2x text-center"></i>
                        <p className="text-center selection-text">Bar Chart</p>
                    </div>
                </Link>
                <Link to="/line">
                    <div className="chart-option">
                        <i class="fas fa-chart-line fa-2x text-center"></i>
                        <p className="text-center selection-text">Line Chart</p>
                    </div>
                </Link>
                <Link to="/doughnut">
                    <div className="chart-option">
                        <i class="fas fa-chart-pie fa-2x text-center"></i>
                        <p className="text-center selection-text">Doughnut Chart</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default ChartSelection