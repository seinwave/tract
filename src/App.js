import React, { useEffect, useState } from "react";
import PageLayout from "./Containers/Layout/PageLayout";
import axios from "axios";
import "./App.scss";

const DataContext = React.createContext();
const fetchData = async (url) => {
  return await axios.get(url);
};

const deleteData = async (table, id) => {
  //todo: how to get updated table in the front-end
  console.log(table, id);
  return await axios.put("http://localhost:3001/delete", {
    table: table,
    id: id,
  });
};

function App() {
  const [state, setState] = useState({
    expenses: [],
    team: [],
    projects: [],
    tickets: [],
    clients: []
  });

  const deleter = (table, id) => {
    deleteData(table,id).then(resp => 
      setState(state => ({...state})))
  }

  useEffect(() => {
    fetchData("http://localhost:3001/admin_expense_view").then((resp) =>
      setState(state => ({...state, expenses:resp.data}))
    );

    fetchData("http://localhost:3001/admin_users_view").then((resp) =>
    setState(state => ({...state, team:resp.data}))
    );

    fetchData("http://localhost:3001/admin_tickets_view").then((resp) =>
    setState(state => ({...state, tickets:resp.data}))
    );

    fetchData("http://localhost:3001/admin_projects_view").then((resp) =>
    setState(state => ({...state, projects:resp.data}))
    );

    fetchData("http://localhost:3001/admin_clients_view").then((resp) =>
    setState(state => ({...state, clients:resp.data}))
    );
  }, []);

  const {expenses, team, projects, tickets, clients} = state;

  return (
    <div>
      <DataContext.Provider
        value={{ expenses, team, projects, tickets, clients, deleter }}
      >
        <PageLayout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
