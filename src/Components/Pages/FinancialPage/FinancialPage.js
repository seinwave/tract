import React from "react";
import TabbedFinancialChart from "../../Widgets/TabbedFinancialChart/TabbedFinancialChart";
import UrgentDueDate from "../../Widgets/UrgentDueDate/UrgentDueDate";
import FlexTable from '../../Widgets/FlexTable/FlexTable'

function Financial() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Financials</h2>
      </div>
    <div className="row content-row financial-row">
    <div className="col-md-6">
        <TabbedFinancialChart header="Monthly Revenue Report" />
      </div>
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

export default Financial;
