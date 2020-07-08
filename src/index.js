import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [
    {id: 1, author: 'Eva'},
    {id: 2, author: 'Oleg'},
    {id: 3, author: 'Ola'},
    {id: 4, author: 'Max'}
];

const messages = [
    {message: 'Hi'},
    {message: 'Bye'},
    {message: 'Good luck'},
    {message: 'So so'},
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
