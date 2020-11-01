import React, { useEffect, useState } from "react";
import Layout from "./Containers/Layout/Layout";
import axios from "axios";
import "./App.css";

const DataContext = React.createContext();
const fetchData = async (url) => {
  return await axios.get(url);
};

function App() {
  const [projects, setProjects] = useState({
  });
  const [users, setUsers] = useState({
  });
  const [tickets, setTickets] = useState({
  });
  const [expenses, setExpenses] = useState({
  });

  useEffect(() => {
    fetchData("http://localhost:3001/projects").then((resp) =>
      setProjects(resp.data)
    );
  }, [setProjects]);

  useEffect(() => {
    fetchData("http://localhost:3001/users").then((resp) =>
      setUsers(resp.data)
    );
  }, [setUsers]);

  useEffect(() => {
    fetchData("http://localhost:3001/tickets").then((resp) =>
      setTickets(resp.data)
    );
  }, [setTickets]);

  useEffect(() => {
    fetchData("http://localhost:3001/expenses").then((resp) =>
      setExpenses(resp.data)
    );
  }, [setExpenses]);

 const data = {
   expenses: expenses,
   projects: projects,
   users: users,
   tickets: tickets
 }

 console.log(data);
 
  return (
    <div>
      <DataContext.Provider value={data}>
        <Layout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
