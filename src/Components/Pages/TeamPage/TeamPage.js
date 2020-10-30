import React from 'react';
import TabbedTeamPageChart from '../../Widgets/TabbedFinancialChart/TabbedFinancialChart';
import UrgentDueDate from '../../Widgets/UrgentDueDate/UrgentDueDate'

function TeamPage() {
    return(
        <div className="row content-row TeamPage-row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                    <h2>TeamPage Snapshot</h2>
                  <TabbedTeamPageChart />
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

export default TeamPage