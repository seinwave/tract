import React, { useEffect, useState } from "react";
import PageLayout from "./Containers/Layout/PageLayout";
import axios from "axios";
import "./App.scss";

const DataContext = React.createContext();
const fetchData = async (url) => {
  return await axios.get(url);
};

const deleteData = async (table, id) => {
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
    clients: [],
    modal: false,
  });

  const modler = () => {
    setState((state) => ({
      ...state,
      modal: !modal
    }))
  }

  // all purpose deleter -- the regex removes the plural 's' from tables' names in 
  // the db
  // because all the db tables share the convention eg --> "tickets" && "ticket_id"
  const deleter = (table, id) => {
    deleteData(table, id).then((resp) => console.log(resp));
    setState((state) => ({
      ...state,
      [table]: state[table].filter((i) => i[`${table.toString().replace(/s$/, '')}_id`] !== id),
    }));
  };

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
  }, [setState]);

  const {expenses, team, projects, tickets, clients, modal} = state;

  return (
    <div>
      {console.log("STATE_AFTER:", state)}
      <DataContext.Provider
        value={{ modler, modal, expenses, team, projects, tickets, clients, deleter }}
      >
        <PageLayout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
