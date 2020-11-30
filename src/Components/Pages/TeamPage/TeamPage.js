import React from "react";
import { Col, Row } from "antd";
import { Button} from 'react-bootstrap';
import '../Page.scss';
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TeamPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <Col>
          <h2>Team</h2>
        </Col>
        <Col>
          <Button id="new-button">New Team Member+</Button>
        </Col>
      </div>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Team List"
            subhed="All the team members in your database"
            role="team"
            columns={[
              "ID#",
              "Name",
              "Role",
              "Email",
              "Associated Tickets",
              "Associated Projects",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TeamPage;
