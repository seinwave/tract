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


  useEffect(() => {
    fetchData("http://localhost:3001/expenses").then((resp) =>
      setExpenses(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/users").then((resp) =>
      setTeam(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/projects").then((resp) =>
      setProjects(resp.data)
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3001/tickets").then((resp) =>
      setTickets(resp.data)
    );
  }, []);

  return (
    <div>
      <DataContext.Provider value={{expenses, team, projects, tickets}}>
        <PageLayout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
