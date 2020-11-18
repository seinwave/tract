import React from 'react'
import { Line } from 'react-chartjs-2'

const MonthlyNetChart = ({gross, name, data}) => {
  let graphData = [];

  const lineData = {
    labels : [],
    datasets: [
      {label: 'Expenses',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'green',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data:[]
      }
    ]
  }

  let i = 0; 
  data.map(d => {
    lineData.datasets[0].data.push(Number(d.amount.replace(/[^0-9.-]+/g,"")));
    lineData.labels.push(`Datapoint ${i}`);
    console.log("ORIG DATA:", data)
    console.log(lineData.datasets[0].data, lineData.labels)
    i++;
    return lineData;
  })

  const RealGross = data.reduce((acc, curr) => {
    return acc + parseInt(curr.amount.replace(/[^0-9.-]+/g,""))
  },0)

  return (
    <div className="position-relative">
      <div className="card-body">
        <div className="text-dark font-size-18 font-weight-bold mb-1">Q1-Q2 Revenue</div>
        <div className="text-gray-6 mb-2"></div>
        <div className="font-weight-bold font-size-36 text-dark">Gross Revenue: {RealGross}</div>
      </div>
      <div>
      <Line className="height-200 width-400 ct-hidden-points" data={lineData} type="Line" />
      </div>    
    </div>
  )
}

export default MonthlyNetChart
