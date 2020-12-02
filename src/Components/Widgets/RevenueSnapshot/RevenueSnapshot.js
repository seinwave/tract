import React from "react";

const RevenueSnapShot = () => {
  return (
    <div className="d-flex flex-wrap align-items-center">
      <div className="mr-auto">
        <p className="text-uppercase text-dark font-weight-bold mb-1">
          Revenue Snapshot
        </p>
        <p className="text-gray-5 mb-0">Month / Year</p>
      </div>
      <p className="text-primary font-weight-bold font-size-24 mb-0">
        NET REVENUE ###
      </p>
    </div>
  );
};

export default RevenueSnapShot;
