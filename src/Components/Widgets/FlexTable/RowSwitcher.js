import React from "react";

function RowSwitcher({ data, role, search }) {
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
      let project_created_date;
      let project_due_date;
      return data
        .filter((d) => {
          project_created_date = new Date(d.created_date);
          project_due_date = new Date(d.due_date);
          const real_project_created_date = `${project_created_date.getMonth()} ${project_created_date.getDate()}, ${project_created_date.getFullYear()}`;
          const real_project_due_date = `${project_due_date.getMonth()} ${project_due_date.getDate()}, ${project_due_date.getFullYear()}`;
          return (
            d.id.toString().toLowerCase().includes(search.toLowerCase()) ||
            real_project_due_date.toLowerCase().includes(search.toLowerCase()) ||
            real_project_created_date.toLowerCase().includes(search.toLowerCase()) ||
            d.name.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.description.toLowerCase().includes(search.toLowerCase()) ||
            d.type.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.client.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.revenue.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.assignee.toString().toLowerCase().includes(search.toLowerCase()) ||
            (d.ticket ? d.ticket.toString().toLowerCase() : "").includes(search.toLowerCase()) ||
            (d.expense ? d.expense.toString().toLowerCase() : "").includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.description}</td>
              <td>{d.type}</td>
              <td>{d.client}</td>
              <td>{`${project_due_date.getMonth()} ${project_due_date.getDate()}, ${project_due_date.getFullYear()}`}</td>
              <td>{`${project_created_date.getMonth()} ${project_created_date.getDate()}, ${project_created_date.getFullYear()}`}</td>
              <td>{d.revenue}</td>
              <td>{d.assignee}</td>
              <td>{d.ticket}</td>
              <td>{d.expense}</td>
            </tr>
          );
        });
      case "tickets": 
        let ticket_due_date;
        let ticket_created_date;
        return data
          .filter((d) => {
            ticket_due_date = new Date(d.target_resolution_date);
            const real_ticket_due_date = `${ticket_due_date .getMonth()} ${ticket_due_date .getDate()}, ${ticket_due_date .getFullYear()}`;
            ticket_created_date = new Date(d.created_date);
            const real_ticket_created_date = `${ticket_created_date.getMonth()} ${ticket_created_date.getDate()}, ${ticket_created_date.getFullYear()}`;
            return (
              d.id.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.title.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.description.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.type.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.status.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.priority.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.assigned_dev.toString().toLowerCase().includes(search.toLowerCase()) ||
              real_ticket_due_date.toLowerCase().includes(search.toLowerCase()) ||
              d.submitter.toString().toLowerCase().includes(search.toLowerCase()) ||
              real_ticket_created_date.toLowerCase().includes(search.toLowerCase()) ||
              d.comments.toString().toLowerCase().includes(search.toLowerCase()) ||
              d.attachments.toLowerCase().includes(search.toLowerCase()) ||
              (d.expense ? d.expense.toString().toLowerCase() : "").includes(search.toLowerCase())
            );
          })
          .map((d) => {
            return (
              <tr>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.type}</td>
                <td>{d.status}</td>
                <td>{d.priority}</td>
                <td>{d.assigned_dev}</td>
                <td>{`${ticket_due_date.getMonth()} ${ticket_due_date.getDate()}, ${ticket_due_date.getFullYear()}`}</td>
                <td>{d.submitter}</td>
                <td>{`${ticket_created_date.getMonth()} ${ticket_created_date.getDate()}, ${ticket_created_date.getFullYear()}`}</td>
                <td>{d.comments}</td>
                <td>{d.attachments}</td>
                <td>{d.expense}</td>
              </tr>
            );
          });
    case "team":
      let team_date;
      return data
        .filter((d) => {
          team_date = new Date(d.created_date);
          const real_team_date = `${team_date.getMonth()} ${team_date.getDate()}, ${team_date.getFullYear()}`;
          return (
            d.id.toString().toLowerCase().includes(search.toLowerCase()) ||
            real_team_date.toLowerCase().includes(search.toLowerCase()) ||
            d.role.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.full_name.toLowerCase().includes(search.toLowerCase()) ||
            d.email.toString().toLowerCase().includes(search.toLowerCase()) ||
            (d.ticket ? d.ticket.toString().toLowerCase() : "").includes(search.toLowerCase()) ||
            (d.expense ? d.expense.toString().toLowerCase() : "").includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.id}</td>
              <td>{d.full_name}</td>
              <td>{d.email}</td>
              <td>{`${team_date.getMonth()} ${team_date.getDate()}, ${team_date.getFullYear()}`}</td>
              <td>{d.role}</td>
              <td>{d.expense}</td>
              <td>{d.ticket}</td>
            </tr>
          );
        });

    case "expenses":
      let expense_date;
      let expense_approved;
      return data
        .filter((d) => {
          if (d.ticket) {
            expense_approved = "APPROVED";
          } else expense_approved = "DENIED";
          expense_date = new Date(d.created_date);
          const real_expense_date = `${expense_date.getMonth()} ${expense_date.getDate()}, ${expense_date.getFullYear()}`;
          return (
            d.amount.toString().toLowerCase().includes(search.toLowerCase()) ||
            real_expense_date.toLowerCase().includes(search.toLowerCase()) ||
            d.creator.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.description.toLowerCase().includes(search.toLowerCase()) ||
            d.project.toString().toLowerCase().includes(search.toLowerCase()) ||
            d.ticket.toString().toLowerCase().includes(search.toLowerCase()) ||
            expense_approved.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((d) => {
          return (
            <tr>
              <td>{d.id}</td>
              <td>{d.amount}</td>
              <td>{d.creator}</td>
              <td>{`${expense_date.getMonth()} ${expense_date.getDate()}, ${expense_date.getFullYear()}`}</td>
              <td>{d.description}</td>
              <td>{d.project}</td>
              <td>{d.ticket}</td>
              <td>{expense_approved}</td>
            </tr>
          );
        });
  }
}

export default RowSwitcher;
