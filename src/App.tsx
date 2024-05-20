import axios from 'axios'
import './App.css'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useEffect, useState } from 'react';

function App() {
  // const [chartData, setChartData] = useState({});

  // useEffect(() => {
  //   (async () => {    
  //     const api_key = 'a37911b7f9e84c1:9j30b22lx3obnd2';
  //     const response = await axios.get(`https://api.tradingeconomics.com/country/mexico?c=${api_key}`);
  //     const data = response.data;

  //     const labels = data.map(item => item.date);
  //     const gdpValues = data.map(item => item.gdp);

  //     setChartData({
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: 'GDP',
  //           data: gdpValues,
  //           borderColor: 'rgba(75,192,192,1)',
  //           backgroundColor: 'rgba(75,192,192,0.2)',
  //         }
  //       ]
  //     });
  //   })();
  // }, []);

  return (
    <>
     {/* <div className="App">
      <h1>Mexico GDP Data</h1>
      {chartData.labels ? (
        <Line data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div> */}
    <iframe src="https://tradingeconomics.com/commodity/crude-oil" width="100%" height="600px" ></iframe>
    <iframe src="https://tradingeconomics.com/commodity/natural-gas" width="100%" height="600px"></iframe>
    </>
  )
}

export default App
