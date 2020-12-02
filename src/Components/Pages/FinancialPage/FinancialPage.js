import React from "react";
import { Col, Row } from "antd";
import { Button } from "react-bootstrap";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function Financial() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <Col>
          <h2>Expenses</h2>
        </Col>
        <Col>
          <Button id="new-button">New Expense+</Button>
        </Col>
      </div>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Expenses"
            subhed="All the expenses in your database"
            role="expenses"
            columns={[
              "ID",
              "Amount",
              "Description",
              "Vendor",
              "Created On",
              "Creator",
              "Associated Tickets",
              "Approved?",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Financial;
