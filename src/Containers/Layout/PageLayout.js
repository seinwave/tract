import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import FinancialPage from "../../Components/Pages/FinancialPage/FinancialPage";
import TeamPage from "../../Components/Pages/TeamPage/TeamPage";
import TicketPage from "../../Components/Pages/TicketPage/TicketPage";
import ProjectPage from "../../Components/Pages/ProjectPage/ProjectPage";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import {
  PieChartOutlined,
  SettingOutlined,
  DollarOutlined,
  InboxOutlined,
  TeamOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./PageLayout.scss";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

function PageLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Router>
        <Layout theme="light" hasSider={true}>
          <Sider
            theme="light"
            collapsible
            // breakpoint="lg"
            // collapsedWidth="0"
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <div className="logoContainer">
              <div className="logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png"
                  className="corner-logo"
                  alt="logo"
                />
                <span className="name">Tract</span>
              </div>
            </div>
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <NavLink className="nav-item" to="/home">
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<TeamOutlined />}>
                <NavLink className="nav-item" to="/team">
                  Team
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<BookOutlined />}>
                <NavLink className="nav-item" to="/projects">
                  Projects
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<InboxOutlined />}>
                <NavLink className="nav-item" to="/tickets">
                  Tickets
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5" icon={<DollarOutlined />}>
                <NavLink className="nav-item" to="/financials">
                  Expenses
                </NavLink>
              </Menu.Item>

              <div class="h-divider"></div>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <NavLink className="nav-item" to="/profile">
                  Profile
                </NavLink>
              </Menu.Item>
              <Menu.Item key="7" icon={<SettingOutlined />}>
                <NavLink className="nav-item" to="/exit">
                  Sign Out
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout theme="light">
            <Header id="real-header" theme="light">
              <TopBar />
            </Header>
            <Content>
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
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}

export default PageLayout;
