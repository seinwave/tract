import React from "react";
import { Col } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TicketPage() {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          {console.log("TICKET DATA:", data)}
          {console.log("MODAL:", data.modal)}
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
                <Modal />
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
