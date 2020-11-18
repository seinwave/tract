import React from "react";

function RowSwitcher({ data, role }) {
  switch (role) {
    default:
      return (
        <tr>
          <td>No</td>
          <td>Actual</td>
          <td>Data</td>
          <td>Whoops</td>
        </tr>
      );
    case "team":
      let date;
      return data.map((d) => {
        date = new Date(d.created_date)
        return (
          <tr>
           
            <td>{d.id}</td>
            <td>{d.amount}</td>
            <td>{d.creator}</td>
            <td>{`${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`}</td>
            <td>{d.description}</td>
            <td>{d.project}</td>
            <td>{d.ticket}</td>
            <td>{d.ticket ? "YES!" : "NO!"}</td>
          </tr>
        );
      });
    case "financial":
      return data.map((d) => (
        <tr>
          <td>{d.id}</td>
          <td>{d.amount}</td>
          <td>{d.creator}</td>
          <td>{d.created_date}</td>
          <td>{d.description}</td>
          <td>{d.project}</td>
          <td>{d.ticket}</td>
          <td>{d.ticket ? "YES!" : "NO!"}</td>
        </tr>
      ));
  }
}

export default RowSwitcher;
