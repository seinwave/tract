import React from "react";
import FlexTable from "../../Widgets/FlexTable/FlexTable";
import {Row, Col} from 'antd'

function ProjectPage() {
  return (
    <div className="container page-container">
      <Row>
        <h2>Projects</h2>
      </Row>
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
