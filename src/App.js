import React, { useEffect, useState } from "react";
import Layout from "./Containers/Layout/Layout";
import axios from "axios";
import "./App.css";

const DataContext = React.createContext();
const fetchData = async () => {
  return await axios.get("http://localhost:3001")
}

function App() {
  const [data, setData] = useState();
  useEffect(() => {
   fetchData()
    .then((resp) => setData(resp.data))
  }, [setData]);

  return (
    <div>
      <DataContext.Provider value={data}>
        <Layout/>
      </DataContext.Provider>
    </div>
  );
}
export {App, DataContext, fetchData}
