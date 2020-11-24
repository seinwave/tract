import React from "react";
import FlexTable from "../../Widgets/FlexTable/FlexTable";

function TicketPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Tickets</h2>
      </div>
      <div className="row content-row financial-row">
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
            "MORE INFO"
          ]}
        />
      </div>
    </div>
  );
}

export default TicketPage;
