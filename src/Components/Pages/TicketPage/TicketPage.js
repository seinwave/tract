import React, { useEffect } from "react";
import { Col } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TicketPage({ submissionClearer }) {
  let users = [];

  useEffect(() => {
    submissionClearer();
  }, []);

  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          <div className="row heading-row dashboard-heading-row">
            <Col>
              <h2>Tickets</h2>
            </Col>
            <Col>
              <Button onClick={() => data.modler()} id="new-button">
                New Ticket+
              </Button>
            </Col>
          </div>
          <div className="row content-row financial-row">
            {data.modal ? (
              <>
                {data.users.map((u) =>
                  users.push([u.user_full_name, u.user_id])
                )}
                <FlexTable
                  header="Ticket List"
                  subhed="All the tickets in your database"
                  role="tickets"
                  columns={[
                    "ID",
                    "Title",
                    "Description",
                    "Type",
                    "Priority",
                    "Status",
                    "Due Date",
                    "Assignee",
                  ]}
                />
                <Modal
                  title="ticket"
                  role="tickets"
                  fields={[
                    ["Title", "input"],
                    ["Description", "input"],
                    ["Priority", "select", ["high", "medium", "low"]],
                    ["Status", "select", ["open", "assigned", "closed"]],
                    [
                      "Type",
                      "select",
                      ["ux problem", "bugs/errors", "design", "data"],
                    ],
                    ["Target Resolution Date", "date"],
                    ["Assignee", "select", users],
                  ]}
                />
              </>
            ) : (
              <FlexTable
                header="Ticket List"
                subhed="All the tickets in your database"
                role="tickets"
                columns={[
                  "ID",
                  "Title",
                  "Description",
                  "Type",
                  "Priority",
                  "Status",
                  "Due Date",
                  "Assignee",
                ]}
              />
            )}
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default TicketPage;
