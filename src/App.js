import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./page/Home";
import About from "./page/About";
import Tomas from "./page/Tomas";
import Users from "./page/Users";
import User from "./page/User";
import Albums from "./page/Albums";
import Photos from "./page/Photos";

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
        <Route exact path="/user/:userId">
          <User />
        </Route>
        <Route exact path="/user/:userId/albums">
          <Albums />
        </Route>
        <Route path="/albums/:albumId/photos">
          <Photos />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
