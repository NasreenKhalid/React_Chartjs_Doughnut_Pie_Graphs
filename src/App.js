import React from 'react'
import './App.css';
import DoughnutChart from './components/Doughnut';
import PieChartGraph from './components/PieChart';


function App() {
  return (
    <div className="App">
      <div className="container">
      <DoughnutChart />
      {/* <PieChartGraph /> */}
      </div>
  
    </div>
  );
}

export default App;
