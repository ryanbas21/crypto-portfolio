import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Home, Portfolio, Navbar } from "./features/";
import { history } from "./store";

export default () => (
  <ConnectedRouter history={history}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  </ConnectedRouter>
);
