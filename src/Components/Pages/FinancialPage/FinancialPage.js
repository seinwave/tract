import React, { useEffect } from "react";
import { Col } from "antd";
import { Button } from "react-bootstrap";
import { DataContext } from "../../../App";
import Modal from "../../Widgets/Modal/Modal";
import "../Page.scss";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function Financial({ submissionClearer }) {
  useEffect(() => {
    submissionClearer();
  }, []);

  let users = [];
  let tickets = [];

  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="container page-container">
          <div className="row heading-row dashboard-heading-row">
            <Col>
              <h2>Expenses</h2>
            </Col>
            <Col>
              <Button onClick={() => data.modler()} id="new-button">
                New Expense+
              </Button>
            </Col>
          </div>
          <div className="row content-row financial-row">
            {data.modal ? (
              <>
                {data.users.map((u) =>
                  users.push([u.user_full_name, u.user_id])
                )}
                {data.tickets.map((t) =>
                  tickets.push([t.ticket_title, t.ticket_id])
                )}
                <FlexTable
                  header="Expenses"
                  subhed="All the expenses in your database"
                  role="expenses"
                  columns={[
                    "ID",
                    "Amount",
                    "Description",
                    "Vendor",
                    "Created On",
                    "Creator",
                    "Associated Tickets",
                    "Approved?",
                  ]}
                />
                <Modal
                  title="expense"
                  role="expenses"
                  fields={[
                    ["Amount", "number"],
                    ["Description", "input"],
                    ["Vendor", "input"],
                    ["Creator", "select", users],
                    ["Ticket", "select", tickets],
                  ]}
                />
              </>
            ) : (
              <FlexTable
                header="Expenses"
                subhed="All the expenses in your database"
                role="expenses"
                columns={[
                  "ID",
                  "Amount",
                  "Description",
                  "Vendor",
                  "Created On",
                  "Creator",
                  "Associated Tickets",
                  "Approved?",
                ]}
              />
            )}
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default Financial;
