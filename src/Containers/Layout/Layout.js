import React from "react";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import { Container, Row, Col } from "react-bootstrap";
import FinancialPage from "../../Components/Pages/FinancialPage/FinancialPage";
import TeamPage from "../../Components/Pages/TeamPage/TeamPage";
import TicketPage from "../../Components/Pages/TicketPage/TicketPage";
import ProjectPage from "../../Components/Pages/ProjectPage/ProjectPage";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <Router>
      <Container fluid>
        <Row className="topbar-row">
          <Col xs={12} id="topbar-wrapper">
            <TopBar />
          </Col>
        </Row>
        <Row>
          <Col className="sidebar-wrapper-col" id="sidebar-wrapper">
            <SideBar>
              <NavLink
                className="nav-item"
                to="/home"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                {" "}
               
                  <span className="nav-title">Home </span><span className="fa fa-home menu-icon"></span>
              </NavLink>

              <NavLink
                className="nav-item"
                to="/financials"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                <span className="nav-title">Financials </span><span className="fa fa-dollar menu-icon"></span>
              </NavLink>
              <NavLink
                className="nav-item"
                to="/projects"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                Projects <i className="fa fa-briefcase"></i>
              </NavLink>
              <NavLink
                className="nav-item"
                to="/tickets"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                Tickets <i className="fa fa-file"></i>
              </NavLink>
              <NavLink
                className="nav-item"
                to="/team"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                Team <i className="fa fa-cog"></i>
              </NavLink>
              <div class="h-divider"></div>
              <NavLink
                className="nav-item"
                to="/profile"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                Profile <i className="fa fa-user"></i>
              </NavLink>
              <NavLink
                className="nav-item"
                to="/exit"
                activeStyle={{ color: "red", fontWeight: "bold" }}
              >
                Sign Out <i className="fa fa-sign-out"></i>
              </NavLink>
            </SideBar>
          </Col>
          <Col xs={8} id="page-content-wrapper">
            <Switch>
              <Route path="/financials">
                <FinancialPage />
              </Route>
              <Route path="/home">
                <Dashboard />
              </Route>
              <Route path="/projects">
                <ProjectPage />
              </Route>
              <Route path="/team">
                <TeamPage />
              </Route>
              <Route path="/tickets">
                <TicketPage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default Layout;
