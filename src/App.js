import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      {/*<div className="App">*/}
      <div className="app-wrapper">
        <Header/>
        <Navigation/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
      </div>
      {/*</div>*/}
    </BrowserRouter>
  );
}

export default App;
