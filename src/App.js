import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dialogs from "./components/Dialogs";

function App() {
  return (
    // <div className="App">
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      {/*<Profile />*/}
      <div>
        <Dialogs/>
      </div>
    </div>
    // </div>
  );
}

export default App;
