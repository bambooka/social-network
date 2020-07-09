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
                    <Navigation friends={props.friends}/>
                    <Switch>
                        <Route path='/dialogs'>
                            <Dialogs messages={props.messages} dialogs={props.dialogs}/>
                        </Route>
                        <Route path='/profile'>
                            <Profile posts={props.posts} addPost={props.addPost}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
