import React from "react";
import TicketsDonut from "../../Widgets/TicketsDonut/TicketsDonut";
import UrgentDueDate from "../../Widgets/UrgentDueDate/UrgentDueDate";
import BarChart from "../../Widgets/BarChart/BarChart";
import FlexTable from "../../Widgets/FlexTable/FlexTable";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Dashboard</h2>
      </div>
      <div className="row content-row dashboard-row">
        <div className="col-md-6">
          <TicketsDonut header="Tickets by Priority" />
        </div>
        <div className="col-md-6">
          <FlexTable
            columns={[
              "ID",
              "Amount",
              "Creator",
              "Created On",
              "Description",
              "Associated Tickets",
              "Associated Projects",
              "Approved?",
            ]}
            header="Recent Activity"
          ></FlexTable>
        </div>
      </div>
      <div className="row content-row dashboard-row">
        <div className="col-md-6">
          <BarChart header="Tickets by Status" />
        </div>
        <div className="col-md-6">
          <UrgentDueDate header="Deadline" />
          <UrgentDueDate header="Recent Ticket" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
