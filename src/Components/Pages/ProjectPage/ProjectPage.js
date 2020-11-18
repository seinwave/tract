import React from "react";
import TabbedFinancialChart from "../../Widgets/TabbedFinancialChart/TabbedFinancialChart";
import UrgentDueDate from "../../Widgets/UrgentDueDate/UrgentDueDate";

function ProjectPage() {
  return (
    <div className="container page-container">
      <div className="row heading-row dashboard-heading-row">
        <h2>Projects</h2>
      </div>
    <div className="row content-row financial-row">
      <div className="col-md-6">
        <TabbedFinancialChart header="Projects Report"/>
      </div>
      <div className="col-md-4">
        <div className="row">
          <UrgentDueDate />
          <UrgentDueDate />
          <UrgentDueDate />
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectPage;
