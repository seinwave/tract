import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Table.scss";
import { DataContext } from "../../../App";
import RowSwitcher from "./RowSwitcher";

function FlexTable({ header, subhed, columns, role }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="card table-card">
          <div className="card-header">
            <h3>{header}</h3>
            <p className="table-subhed">{subhed}</p>
          </div>
          <div className="card-body">
            <div className="table-function-row row">
              <div className="entry-modifier-col col">
                <p>
                  Show <input type="number"></input> entries
                </p>
              </div>
              <div className="search-bar-col col">
                <p>
                  Search:{" "}
                  <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                  ></input>
                </p>
              </div>
            </div>
            <Table size="sm" responsive striped bordered hover>
              <thead>
                <tr>
                  {columns.map((c) => {
                    return <th>{c}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <RowSwitcher
                  search={searchInput}
                  deleter={data.deleter}
                  data={data[role]}
                  role={role}
                />
              </tbody>
            </Table>
            <div className="table-footer-row row">
              <div className="col entry-count-col">
                <p>Showing 1 to 4 of 4 entries</p>
              </div>
              <div className="col entry-pagination-col">
                <span>
                  {" "}
                  Prev <button>1</button> Next
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default FlexTable;
