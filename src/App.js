import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/tomas/Header';
import Detail from './components/Detial';
import Lyout from './Lyout';
import Home from './page/Home';
import About from './page/About';
import Tomas from './page/Tomas';
 

function App(){
  return (<Lyout>
    <switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route >
      <Route path="/tomas">
      <Tomas/>
      </Route>
    </switch>

  </Lyout>)
}


export default App;
