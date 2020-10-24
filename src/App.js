import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./page/Home";
import About from "./page/About";
import Tomas from "./page/Tomas";
import Users from "./page/Users";
import User from "./page/User";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tomas">
          <Tomas />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
