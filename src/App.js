import './App.css';
import BarChart from './components/BarChart';
import WithAxisBarChart from './components/BarChart/WithAxisBarChart';
import WithMarginBarChart from './components/BarChart/WithMarginBarChart';
import D3One from './components/D3One';
import FlusServeillance from './components/FluServeillance';

function App() {
  return (
    <div className="App">
      <p>DataView</p>
      <WithAxisBarChart/>
    </div>
  );
}

export default App;
