import React from "react";
import { NavLink } from "react-router-dom";

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
      {/* submenu */}
    </aside>
  );
}