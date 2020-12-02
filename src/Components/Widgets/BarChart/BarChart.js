import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ header }) {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [0, 14],
      },
    ],
  };
  return (
    <div className="card">
      <h3 className="card-header">{header}</h3>
      <div className="card-body">
        <Bar
          data={data}
          width={250}
          height={100}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    </div>
  );
}

export default BarChart;
