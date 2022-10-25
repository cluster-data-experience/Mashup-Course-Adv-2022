import React from "react";
import { NavLink } from "react-router-dom";

//components
import SubMenu from './SubMenu'

import './styles.css'

const Sidebar = () => {
  return (
    <aside className="navigation">
      <ul className="menu-list">
        <li className="menu-label"></li>
        <li className="menu-item">
          <NavLink to="/home" className="menu-link" activeClassName="active"> Kpi DashBoard </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/test" className="menu-link" activeClassName="active"> Sales Analylsis </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/inactive" className="menu-link" activeClassName="active"> Sales Rep. Performance </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/inactive" className="menu-link" activeClassName="active"> Layout Examples </NavLink>
        </li>
        <li className="menu-label"></li>
        <li className="menu-item">
          <a 
            href="https://www.google.com"
            target="_blank"
            className="no-page"
            rel="noopener noreferrer"
          >
            External Link
          </a>
        </li>
      </ul>
      <SubMenu
        name="Submenu"
        items = {[
          { name: "A submenu item", link: "home" },
          { name: "Another submenu item", link: "test" }
        ]}
      />

      <div className="nav-info">
        <a href="https://clusterdesign.io" target="_blank" rel="noreferrer">
          <img src="assets/img/cluster-logo-negative.svg" alt="logo" />
        </a>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="nav-info-text">info@clustesign.io</span>
          <span className="nav-info-text">clustesign.io</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;