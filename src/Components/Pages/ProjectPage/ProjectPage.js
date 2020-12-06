import React, { useEffect } from "react";
import { Col } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function ProjectPage({ submissionClearer }) {
  useEffect(() => {
    submissionClearer();
  }, []);

  let users = [];
  let clients = [];
  let tickets = [];

  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          <div className="row heading-row dashboard-heading-row">
            <Col>
              <h2>Projects</h2>
            </Col>
            <Col>
              <Button onClick={() => data.modler()} id="new-button">
                New Project+
              </Button>
            </Col>
          </div>
          <div className="row content-row financial-row">
            {data.modal ? (
              <>
                {data.users.map((u) =>
                  users.push([u.user_full_name, u.user_id])
                )}
                {data.clients.map((c) =>
                  clients.push([c.client_name, c.client_id])
                )}
                {data.tickets.map((t) =>
                  tickets.push([t.ticket_title, t.ticket_id])
                )}
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
                <Modal
                  title="project"
                  role="projects"
                  fields={[
                    ["Name", "input"],
                    ["Description", "input"],
                    ["Clients", "select", clients],
                    [
                      "Type",
                      "select",
                      ["web dev", "logistics", "hacking", "sec ops"],
                    ],
                    ["Due Date", "date"],
                    ["Revenue", "number"],
                    ["Assignee", "select", users],
                    ["Tickets", "select", tickets],
                  ]}
                />
              </>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default ProjectPage;

/*
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
*/
