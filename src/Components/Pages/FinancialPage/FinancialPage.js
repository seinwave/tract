import React from "react";
import { Row, Col } from "antd";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function Financial() {
  return (
    <div className="container page-container">
      <Row>
        <h2>Expenses</h2>
      </Row>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Expenses"
            subhed="All the expenses in your database"
            role="expenses"
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
          />
        </Col>
      </Row>
    </div>
  );
}

export default Financial;
