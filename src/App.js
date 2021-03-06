import './App.css';
import ChartSelection from "./_components/chart-selection"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BarDoughnutSettings from './_components/chart-settings/bar-doughnut-settings';
import LineSettings from './_components/chart-settings/line-settings';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ChartSelection} />
                <Route path="/bar" component={BarDoughnutSettings} />
                <Route path="/line" component={LineSettings} />
                <Route path="/doughnut" component={BarDoughnutSettings} />
            </Switch>
        </Router>
    )
}
export default App;
