import React from "react";
import "./SideBar.css";
import Nav from "react-bootstrap/Nav";
import { v4 as uuidv4 } from "uuid";

function SideBar({ children }) {
  return (
    <Nav defaultActiveKey="/home" className="sidebar flex-column">
      {children.map((c) => (
        <div key={uuidv4()} className="navlink-span">
          {c}
        </div>
      ))}
    </Nav>
  );
}

export default SideBar;
