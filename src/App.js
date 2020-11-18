import React, { useEffect, useState } from "react";
import Layout from "./Containers/Layout/Layout";
import axios from "axios";
import "./App.scss";
import MonthlyExpensesChart from "./Components/Widgets/MonthlyExpensesChart/MonthlyExpensesChart";

const DataContext = React.createContext();
const fetchData = async (url) => {
  return await axios.get(url);
};

function App() {
  const [expenses, setExpenses] = useState({
  });
 

  useEffect(() => {
    fetchData("http://localhost:3001/expenses").then((resp) =>
      setExpenses(resp.data)
    );
  }, []);

  console.log(expenses);

  return (
    <div>
      <DataContext.Provider value={expenses}>
        <Layout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
