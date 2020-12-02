import React from "react";

const UrgentDueDate = ({ header }) => {
  return (
    <div className="card">
      <h3 className="card-header">{header}</h3>
      <div className="card-body">
        <div className="d-flex flex-wrap align-items-center">
          <div className="mr-auto">
            <p className="text-uppercase text-dark font-weight-bold mb-1">
              Upcoming Deadline
            </p>
            <p className="text-gray-5 mb-0">Project Name / Ticket Name</p>
          </div>
          <p className="text-primary font-weight-bold font-size-24 mb-0">
            Ticket Date
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrgentDueDate;
