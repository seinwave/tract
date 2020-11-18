import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MonthlyRevenueChart from "../MonthlyRevenueChart/MonthlyRevenueChart";
import MonthlyNetChart from "../MonthlyNetChart/MonthlyNetChart";
import MonthlyExpensesChart from "../MonthlyExpensesChart/MonthlyExpensesChart";
import { DataContext } from "../../../App";

const TabbedFinancialChart = ({header}) => {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="card">
          <h3 className="card-header">{header}</h3>
          <div className="card-body">
            <div>
              <Tabs defaultActiveKey="net">
                <Tab eventKey="revenue" title="Revenue">
                  <div>
                    <MonthlyRevenueChart
                      gross={data[0].amount}
                      name={data[0].vendor}
                      data={data}
                    />
                  </div>
                </Tab>
                <Tab eventKey="expenses" title="Expenses">
                  <div>
                    <MonthlyExpensesChart 
                    gross={data[0].amount}
                    name={data[0].vendor}
                    data={data}/>
                  </div>
                </Tab>
                <Tab eventKey="net" title="Net">
                  <div>
                    <MonthlyNetChart 
                    gross={data[0].amount}
                    name={data[0].vendor}
                    data={data}/>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
};

export default TabbedFinancialChart;
