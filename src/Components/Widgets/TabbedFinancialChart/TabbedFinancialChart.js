import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MonthlyRevenueChart from "../MonthlyRevenueChart/MonthlyRevenueChart";
import MonthlyNetChart from "../MonthlyNetChart/MonthlyNetChart";
import MonthlyExpensesChart from "../MonthlyExpensesChart/MonthlyExpensesChart";
import { DataContext } from "../../../App";

const TabbedFinancialChart = () => {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div>
          <Tabs defaultActiveKey="net">
            <Tab eventKey="revenue" title="Revenue">
              <div>
                <MonthlyRevenueChart gross ={data[0].revenue} name={data[0].name} />
              </div>
            </Tab>
            <Tab eventKey="expenses" title="Expenses">
              <div>
                <MonthlyExpensesChart />
              </div>
            </Tab>
            <Tab eventKey="net" title="Net">
              <div>
                <MonthlyNetChart />
              </div>
            </Tab>
          </Tabs>
        </div>
      )}
    </DataContext.Consumer>
  );
};

export default TabbedFinancialChart;
