import React from "react";
import "./SideBar.scss";
import Nav from "react-bootstrap/Nav";
import { v4 as uuidv4 } from "uuid";

function SideBar({ children }) {
  return (
    <div className="sidebar">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/11/Chipotle-Logo.png"
        alt="tract-logo"
        className="topbar-logo-image"
      />
      <a className="navbar-brand" href="www.mattseidholz.com/">
        Tract
      </a>
      <Nav defaultActiveKey="/home" className="flex-column">
        {children.map((c) => (
          <div key={uuidv4()} className="navlink-span">
            {c}
          </div>
        ))}
      </Nav>
    </div>
  );
}

export default SideBar;
