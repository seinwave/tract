import React from "react";
import { DataContext } from "../../../App";
import { Button } from "react-bootstrap";
import "./Modal.scss";

function Modal() {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div className="my-modal">
          {console.log("MODAL DATA", data)}
          <div className="modal-main">
            Modal
            <Button onClick={() => data.modler()}>MODLER</Button>
          </div>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default Modal;
