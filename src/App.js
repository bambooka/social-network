import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header/>
          <Navigation friends={props.store._data.friends}/>
          <Switch>
            <Route path='/dialogs'>
              <Dialogs
                messages={props.store._data.messages}
                dialogs={props.store._data.dialogs}/>
            </Route>
            <Route path='/profile'>
              <Profile
                posts={props.store._data.posts}
                dispatch={props.dispatch}
                currentInput={props.store._data.currentInput}/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;