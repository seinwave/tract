import React from "react";
import TicketsDonut from "../../Widgets/TicketsDonut/TicketsDonut";
import UrgentDueDate from "../../Widgets/UrgentDueDate/UrgentDueDate";
import BarChart from "../../Widgets/BarChart/BarChart";
import FlexTable from "../../Widgets/FlexTable/FlexTable";
import { Row, Col } from "antd";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Dashboard</h2>
      </div>
      <Row gutter={[32, 16]}>
        <Col span={12}>
          <TicketsDonut header="Tickets by Priority" />
        </Col>
        <Col span={12}>
          <UrgentDueDate header="Deadline" />
          <UrgentDueDate header="Recent Ticket" />
        </Col>
      </Row>
      <Row gutter={[32, 16]}>
        <Col span={12}>
          <BarChart header="Tickets by Status" />
        </Col>

        <Col span={12}>
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
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
