import React from "react";
import { Row, Col } from "antd";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TeamPage() {
  return (
    <div className="container page-container">
      <Row>
        <h2>Team</h2>
      </Row>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Team List"
            subhed="All the team members in your database"
            role="team"
            columns={[
              "#",
              "Name",
              "Email",
              "Joined Date",
              "Role",
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
