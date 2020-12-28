import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login";
import Join_Check from "./join_check";
import Join_Member from "./join_member";

import Home from "./home";

function App() {
  return (
    <Router>
      <Switch>
        {/* 실제 사용 될 코드 */}
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/join_check" component={Join_Check} exact />
        <Route path="/join_member" component={Join_Member} exact />
      </Switch>
    </Router>
  );
}

export default App;
