import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
  return (
    // <div className="App">
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Main />
    </div>
    // </div>
  );
}

export default App;
