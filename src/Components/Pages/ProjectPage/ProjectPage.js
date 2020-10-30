import React from 'react';
import TabbedFinancialChart from '../../Widgets/TabbedFinancialChart/TabbedFinancialChart';
import UrgentDueDate from '../../Widgets/UrgentDueDate/UrgentDueDate'

function ProjectPage() {
    return(
        <div className="row content-row financial-row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                    <h2>ProjectPage</h2>
                  <TabbedFinancialChart />
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <div className="row">
              <div className="card">
                <div className="card-body">
                    <h2>Deadline</h2>
                  <UrgentDueDate />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                    <h2>Deadline</h2>
                  <UrgentDueDate />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                    <h2>Deadline</h2>
                  <UrgentDueDate />
                </div>
              </div>
              </div>
            </div>
          </div>
    )

}

export default ProjectPage