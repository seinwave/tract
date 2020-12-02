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

const createRow = async (table, submission) => {
  await axios.put("http://localhost:3001/insert", {
    table: table,
    submission: submission,
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
    submission: {},
  });

  const modler = () => {
    setState((state) => ({
      ...state,
      modal: !modal,
    }));
  };

  const onInputChange = (field, value) => {
    setState((state) => ({
      ...state,
      submission: {
        ...state.submission,
        [field]: value,
      },
    }));
  };

  const submitRow = async (table, submission, latestId) => {
    // create row on backend
    await createRow(table, submission);

    // close the modal submission window
    modler();

    // refresh the frontend content
    return await fetchData(
      `http://localhost:3001/admin_${table}_view`
    ).then((resp) => setState((state) => ({ ...state, [table]: resp.data })));
  };

  // all purpose deleter -- the regex removes the plural 's' from tables' names in
  // the db
  // because all the db tables share the convention eg --> "tickets" && "ticket_id"
  const deleter = (table, id) => {
    deleteData(table, id).then((resp) => console.log(resp));
    setState((state) => ({
      ...state,
      [table]: state[table].filter(
        (i) => i[`${table.toString().replace(/s$/, "")}_id`] !== id
      ),
    }));
  };

  useEffect(() => {
    fetchData("http://localhost:3001/admin_expense_view").then((resp) =>
      setState((state) => ({ ...state, expenses: resp.data }))
    );

    fetchData("http://localhost:3001/admin_users_view").then((resp) =>
      setState((state) => ({ ...state, team: resp.data }))
    );

    fetchData("http://localhost:3001/admin_tickets_view").then((resp) =>
      setState((state) => ({ ...state, tickets: resp.data }))
    );

    fetchData("http://localhost:3001/admin_projects_view").then((resp) =>
      setState((state) => ({ ...state, projects: resp.data }))
    );

    fetchData("http://localhost:3001/admin_clients_view").then((resp) =>
      setState((state) => ({ ...state, clients: resp.data }))
    );
  }, [setState]);

  const {
    expenses,
    team,
    projects,
    tickets,
    clients,
    modal,
    submission,
  } = state;

  return (
    <div>
      <DataContext.Provider
        value={{
          modal,
          expenses,
          team,
          projects,
          tickets,
          clients,
          submission,
          deleter,
          onInputChange,
          modler,
          submitRow,
        }}
      >
        <PageLayout />
      </DataContext.Provider>
    </div>
  );
}
export { App, DataContext, fetchData };
