import React from "react";
import TabbedFinancialChart from "../../Widgets/TabbedFinancialChart/TabbedFinancialChart";
import UrgentDueDate from "../../Widgets/UrgentDueDate/UrgentDueDate";
import FlexTable from '../../Widgets/FlexTable/FlexTable'

function TeamPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Team</h2>
      </div>
    <div className="row content-row financial-row">
      <div className="col-md-6">
        <TabbedFinancialChart header="Team Report" />
      </div>
      <div className="col-md-4">
          <UrgentDueDate />
          <UrgentDueDate />
          <UrgentDueDate />
      </div>
    </div>
    <div className="row content-row financial-row">
      <FlexTable 
      header="Team List" 
      subhed="All the team members in your database"
      role="team"
      columns={["Name", "Email", "UserID", "Associated Tickets", "Associated Projects", "Approved?"]}/>
    </div>
    </div>
  );
}

export default TeamPage;
