import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import BarChart from './components/BarChart';
import WithMarginBarChart from './components/BarChart/WithMarginBarChart';
import D3One from './components/D3One';
import FlusServeillance from './components/FluServeillance';
import WithAxisBarChart from './components/BarChart/WithAxisBarChart';
import LineChart from './components/LineChart';
import AppBarComponent from './ui.components/AppBarComponent';
import MainLayout from './layouts/main.layout';
import AboutScreen from './screens/AboutScreen';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <AboutScreen />
            </MainLayout>
          </Route>
          <Route exact path="/covid-19">
            <MainLayout>
              <LineChart />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
