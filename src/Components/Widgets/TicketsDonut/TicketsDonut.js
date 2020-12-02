import React from "react";
import { Doughnut } from "react-chartjs-2";

const TicketsDonut = ({ header }) => {
  const data = {
    labels: ["High", "Medium", "Low", "Resolved"],
    datasets: [
      {
        data: [12, 19, 3, 21],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(34, 34, 34, .5)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="card">
      <h3 className="card-header">{header}</h3>
      <div className="card-body">
        <Doughnut
          data={data}
          width={250}
          height={100}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    </div>
  );
};

export default TicketsDonut;
