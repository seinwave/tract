import React from "react";
import { Col, Row } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TeamPage() {
  let tickets = [];
  let projects = [];
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          <div className="row heading-row dashboard-heading-row">
            <Col>
              <h2>Team</h2>
            </Col>
            <Col>
              <Button onClick={() => data.modler()} id="new-button">
                New Team Member+
              </Button>
            </Col>
          </div>
          <Row gutter={[32, 16]}>
            <Col span={24}>
              {data.modal ? (
                <>
                  {data.tickets.map((t) =>
                    tickets.push([t.ticket_title, t.ticket_id])
                  )}
                  {data.projects.map((p) =>
                    projects.push([p.project_name, p.project_id])
                  )}

                  {console.log("TICKETS", tickets)}
                  {console.log("PROJECTS", projects)}
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
                  <Modal
                    title="user"
                    role="users"
                    fields={[
                      ["Full Name", "input"],
                      ["Role", "select", ["admin", "pm", "dev", "sub"]],
                      ["Email", "input"],
                      ["Projects", "select", projects],
                      ["Tickets", "select", tickets],
                    ]}
                  />
                </>
              ) : (
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
              )}
            </Col>
          </Row>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default TeamPage;
