import React from "react";
import { Col, Row } from "antd";
import { Button} from 'react-bootstrap';
import '../Page.scss';
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function ClientsPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <Col>
          <h2>Clients</h2>
        </Col>
        <Col>
          <Button id="new-button">New Client+</Button>
        </Col>
      </div>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Client List"
            subhed="All the clients in your database"
            role="clients"
            columns={[
              "ID",
              "Name",
              "Contact Name",
              "Contact Email",
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
