import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Sports from "./pages/Sports";
import Gaming from "./pages/Gaming";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Gaming}></IndexRoute>
      <Route path="sports(/:article)" name="Sports" component={Sports}></Route>

    </Route>
  </Router>,
app);
