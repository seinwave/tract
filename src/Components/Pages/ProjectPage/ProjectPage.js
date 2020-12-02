import React from "react";
import { Col, Row } from "antd";
import { Button } from "react-bootstrap";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function ProjectPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <Col>
          <h2>Project</h2>
        </Col>
        <Col>
          <Button id="new-button">New Project+</Button>
        </Col>
      </div>
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <FlexTable
            header="Project List"
            subhed="All the projects in your database"
            role="projects"
            columns={[
              "ID",
              "Name",
              "Description",
              "Client",
              "Type",
              "Due Date",
              "PM",
              "Tickets",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProjectPage;
