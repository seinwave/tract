import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'red',
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
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}

const MonthlyExpensesChart = () => {
  return (
    <div className="position-relative">
      <div className="card-body">
        <div className="text-dark font-size-18 font-weight-bold mb-1">Q1-Q2 Expenses</div>
        <div className="text-gray-6 mb-2"></div>
        <div className="font-weight-bold font-size-36 text-dark">$600,000</div>
      </div>
      <Line className="height-200 width-400 ct-hidden-points" data={data} type="Line" />
    </div>
  )
}

export default MonthlyExpensesChart
