import React from "react";
import FlexTable from "../../Widgets/FlexTable/FlexTable";
import {Row, Col} from 'antd'

function ClientsPage() {
  return (
    <div className="container page-container">
      <Row>
        <h2>Clients</h2>
      </Row>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Client List"
            subhed="All the clients in your database"
            role="clients"
            columns={[
              "ID",
              "Name",
              "Industry",
              "Joined Date",
              "Tickets",
              "Projects",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ClientsPage;
