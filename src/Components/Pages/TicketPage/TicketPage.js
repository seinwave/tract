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
          role="financial"
          columns={[
            "ID",
            "Amount",
            "Creator",
            "Created On",
            "Description",
            "Associated Tickets",
            "Associated Projects",
            "Approved?",
          ]}
        />
      </div>
    </div>
  );
}

export default TicketPage;
