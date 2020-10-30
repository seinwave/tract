import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/11/Chipotle-Logo.png"
          alt="tract-logo"
          className="topbar-logo-image"
        />
        <a className="navbar-brand" href="www.mattseidholz.com/">
          Tract
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        <Dropdown className="avatar-dropdown-button">
          <Dropdown.Toggle>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"
              alt="Avatarimage"
              className="topbar-avatar-image"
            />{" "}
            Hi, USER
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}

export default TopBar;
