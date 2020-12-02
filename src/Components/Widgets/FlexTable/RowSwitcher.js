import React from "react";
import { Button, Col } from "antd";

function RowSwitcher({ deleter, data, role, search }) {
  switch (role) {
    default:
      return (
        <tr>
          <td>No</td>
          <td>Actual</td>
          <td>Data</td>
          <td>Whoops</td>
        </tr>
      );
    case "projects":
      let project_due_date;
      return data
        .filter((d) => {
          project_due_date = new Date(d.project_due_date);
          const real_project_due_date = `${project_due_date.getMonth()} ${project_due_date.getDate()}, ${project_due_date.getFullYear()}`;
          return (
            d.project_id
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            real_project_due_date
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.project_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.project_description
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.project_type
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.project_client
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.user_full_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            (d.ticket_title
              ? d.ticket_title.toString().toLowerCase()
              : ""
            ).includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.project_id}</td>
              <td>{d.project_name}</td>
              <td>{d.project_description}</td>
              <td>{d.client_name}</td>
              <td>{d.project_type}</td>
              <td>{`${project_due_date.getMonth()} ${project_due_date.getDate()}, ${project_due_date.getFullYear()}`}</td>
              <td>{d.user_full_name}</td>
              <td>{d.ticket_title}</td>
              <td>
                <Col>
                  <Button type="primary">Modify</Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => deleter("projects", d.project_id)}
                    danger
                  >
                    Delete
                  </Button>
                </Col>
              </td>
            </tr>
          );
        });

    case "clients":
      let client_joined_date;
      return data
        .filter((d) => {
          client_joined_date = new Date(d.client_created_date);
          const real_client_joined_date = `${client_joined_date.getMonth()} ${client_joined_date.getDate()}, ${client_joined_date.getFullYear()}`;
          return (
            d.client_id
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            real_client_joined_date
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.client_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.client_contact_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.client_contact_email
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_title.toLowerCase().includes(search.toLowerCase()) ||
            d.client_industry
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.project_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.client_id}</td>
              <td>{d.client_name}</td>
              <td>{d.client_contact_name}</td>
              <td>{d.client_contact_email}</td>
              <td>{d.client_industry}</td>
              <td>{`${client_joined_date.getMonth()} ${client_joined_date.getDate()}, ${client_joined_date.getFullYear()}`}</td>
              <td>{d.ticket_title}</td>
              <td>{d.project_name}</td>
              <td>
                <Col>
                  <Button type="primary">Modify</Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => deleter("clients", d.client_id)}
                    danger
                  >
                    Delete
                  </Button>
                </Col>
              </td>
            </tr>
          );
        });
    case "tickets":
      let ticket_due_date;
      return data
        .filter((d) => {
          ticket_due_date = new Date(d.ticket_target_resolution_date);
          const real_ticket_due_date = `${ticket_due_date.getMonth()} ${ticket_due_date.getDate()}, ${ticket_due_date.getFullYear()}`;
          return (
            d.ticket_id
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_title
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_description
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_type
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_status
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_priority
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.user_full_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            real_ticket_due_date.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.ticket_id}</td>
              <td>{d.ticket_title}</td>
              <td>{d.ticket_description}</td>
              <td>{d.ticket_type}</td>
              <td>{d.ticket_status}</td>
              <td>{d.ticket_priority}</td>
              <td>{`${ticket_due_date.getMonth()} ${ticket_due_date.getDate()}, ${ticket_due_date.getFullYear()}`}</td>
              <td>{d.user_full_name}</td>
              <td>
                <Col className="ticket-button-col">
                  <Button type="primary">Modify</Button>
                </Col>
                <Col className="ticket-button-col">
                  <Button
                    onClick={() => deleter("tickets", d.ticket_id)}
                    danger
                  >
                    Delete
                  </Button>
                </Col>
              </td>
            </tr>
          );
        });
    case "team":
      return data
        .filter((d) => {
          return (
            d.user_id.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.user_role
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.user_full_name.toLowerCase().includes(search.toLowerCase()) ||
            d.user_email
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            (d.ticket_title
              ? d.ticket_title.toString().toLowerCase()
              : ""
            ).includes(search.toLowerCase()) ||
            (d.project_name
              ? d.project_name.toString().toLowerCase()
              : ""
            ).includes(search.toLowerCase())
          );
        })
        .map((d) => {
          console.log(d);
          return (
            <tr>
              <td>{d.user_id}</td>
              <td>{d.user_full_name}</td>
              <td>{d.user_role}</td>
              <td>{d.user_email}</td>
              <td>{d.project_name}</td>
              <td>{d.ticket_title}</td>
              <td>
                <Col>
                  <Button type="primary">Modify</Button>
                </Col>
                <Col>
                  <Button onClick={() => deleter("users", d.client_id)} danger>
                    Delete
                  </Button>
                </Col>
              </td>
            </tr>
          );
        });

    case "expenses":
      let expense_date;
      return data
        .filter((d) => {
          expense_date = new Date(d.expense_created_date);
          const real_expense_date = `${expense_date.getMonth()} ${expense_date.getDate()}, ${expense_date.getFullYear()}`;
          return (
            d.expense_amount
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.expense_id
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            real_expense_date.toLowerCase().includes(search.toLowerCase()) ||
            d.user_full_name
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.expense_description
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.expense_vendor
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.ticket_title
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            d.expense_approved
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        })
        .map((d) => {
          console.log(d);
          return (
            <tr>
              <td>{d.expense_id}</td>
              <td>{d.expense_amount}</td>
              <td>{d.expense_description}</td>
              <td>{d.expense_vendor}</td>
              <td>{`${expense_date.getMonth()} ${expense_date.getDate()}, ${expense_date.getFullYear()}`}</td>
              <td>{d.user_full_name}</td>
              <td>{d.ticket_title}</td>
              <td>
                {d.expense_approved ? (
                  <span style={{ color: "green" }}> TRUE </span>
                ) : (
                  <span style={{ color: "red" }}> FALSE </span>
                )}
              </td>
              <td>
                <Col>
                  <Button type="primary">Modify</Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => deleter("expenses", d.client_id)}
                    danger
                  >
                    Delete
                  </Button>
                </Col>
              </td>
            </tr>
          );
        });
  }
}

export default RowSwitcher;
