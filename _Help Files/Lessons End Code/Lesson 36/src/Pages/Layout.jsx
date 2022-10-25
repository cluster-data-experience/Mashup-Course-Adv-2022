import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";

// components
import Sidebar from '../Components/Sidebar';
import RightFilters from "../Components/RightFilters";
import Navbar from "../Components/Navbar/Navbar.jsx";

// pages
import Home from "../Pages/Home";
import Page2 from "../Pages/Page2";

function Layout() {
  return (
    <>
      <HashRouter>
        <Sidebar />
        <RightFilters />
        <Navbar />
        <div className="layout">
          <Switch>
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/test" render={() => <Page2 />} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </>
  );
}

export default Layout;
