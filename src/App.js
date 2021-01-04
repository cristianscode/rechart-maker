import './App.css';
import BarChart from "./_components/chart-types/bar-chart"
import BarSettings from "./_components/chart-settings/bar-settings"
import LineChart from "./_components/chart-types/line-chart"
import DoughnutChart from "./_components/chart-types/doughnut-chart"
import ChartSelection from "./_components/chart-selection"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ChartSelection} />
                <Route path="/bar" component={BarSettings} />
                <Route path="/line" component={LineChart} />
                <Route path="/doughnut" component={DoughnutChart} />
            </Switch>
        </Router>
    )
}
export default App;
