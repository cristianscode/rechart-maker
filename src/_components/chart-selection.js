import React from "react";
import {Link} from "react-router-dom";
function ChartSelection() {
    return (
        <div>
            <Link to="/bar"><h1>Bar</h1></Link>
            <Link to="/line"><h1>Line</h1></Link>
            <Link to="/doughnut"><h1>Doughnut</h1></Link>
        </div>
    )
}

export default ChartSelection