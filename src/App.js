import React, { useEffect, useState } from "react";
import PageLayout from "./Containers/Layout/PageLayout";
import axios from "axios";
import "./App.scss";

const DataContext = React.createContext();
const fetchData = async (url) => {
  return await axios.get(url);
};

function App() {
  const [expenses, setExpenses] = useState({});
  const [team, setTeam] = useState({});
  const [projects, setProjects] = useState({});
  const [tickets, setTickets] = useState({});
  const [clients, setClients] = useState({})

  useEffect(() => {
    fetchData("http://localhost:3001/admin_expense_view").then((resp) =>
      setExpenses(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/admin_users_view").then((resp) =>
      setTeam(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/admin_projects_view").then((resp) =>
      setProjects(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/admin_tickets_view").then((resp) =>
      setTickets(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/admin_clients_view").then((resp) =>
      setClients(resp.data)
    );
  }, []);

  return (
    <div>
      <DataContext.Provider value={{expenses, team, projects, tickets, clients}}>
        <PageLayout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
