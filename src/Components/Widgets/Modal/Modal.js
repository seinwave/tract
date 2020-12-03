import React from "react";
import { DataContext } from "../../../App";
import { Button } from "react-bootstrap";
import "./Modal.scss";

function Modal({ role, title, fields }) {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="my-modal">
          {console.log("SUBMISSION DATA", data)}
          <div className="card">
            <div className="modal-main">
              <div className="card-header">
                <h3>Create New {title}</h3>
              </div>
              <div className="card-body">
                {fields.map((f) => {
                  return (
                    <div className={`${f[0]}-input`}>
                      <label htmlFor={f[0]}>{f[0]}</label>
                      {f[1] === "select" ? (
                        <select
                          onChange={(e) =>
                            data.onInputChange(e.target.name, e.target.value)
                          }
                          name={`${title}_${f[0].toLowerCase()}`}
                        >
                          <option value="">-</option>
                          {f[2].map((o) => {
                            return o.length === 2 ? (
                              <option value={o[1]}>
                                {o[0]}
                                {console.log("O[1] is...", o[1])}
                              </option>
                            ) : (
                              <option value={o}>{o}</option>
                            );
                          })}
                        </select>
                      ) : (
                        <input
                          onChange={(e) =>
                            data.onInputChange(e.target.name, e.target.value)
                          }
                          name={`${title}_${f[0]
                            .toLowerCase()
                            .replace(/\s/gm, "_")}`}
                          type={f[1]}
                        ></input>
                      )}
                    </div>
                  );
                })}
              </div>
              <Button onClick={() => data.submitRow(role, data.submission)}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default Modal;
