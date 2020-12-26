import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login";
import Join_Check from "./join_check";
import Join_Member from "./join_member";
import "./CSS/login.css";
import "./CSS/join_check.css";
import "./CSS/join_member.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/join_check" component={Join_Check} exact />
        <Route path="/join_member" component={Join_Member} exact />
      </Switch>
    </Router>
  );
}

export default App;
