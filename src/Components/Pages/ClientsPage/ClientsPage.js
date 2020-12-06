import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function ClientsPage({ submissionClearer }) {
  useEffect(() => {
    submissionClearer();
  }, []);

  let tickets = [];
  let projects = [];

  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          <div className="row heading-row dashboard-heading-row">
            <Col>
              <h2>Clients</h2>
            </Col>
            <Col>
              <Button onClick={() => data.modler()} id="new-button">
                New Client+
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
                  <Modal
                    title="client"
                    role="clients"
                    fields={[
                      ["Name", "input"],
                      ["Contact Name", "input"],
                      ["Contact Email", "input"],
                      ["Industry", "input"],
                      ["Project", "select", projects],
                      ["Ticket", "select", tickets],
                    ]}
                  />
                </>
              ) : (
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
              )}
            </Col>
          </Row>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default ClientsPage;

/*
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
*/
