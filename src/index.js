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

const posts = [
    {
        id: 1,
        img: 'https://us.123rf.com/450wm/irinalevitskaya/irinalevitskaya1802/irinalevitskaya180200102/96364553-wow-pop-art-face-sexy-surprised-woman-with-blonde-curly-hair-and-open-mouth-holding-binoculars-in-he.jpg?ver=6',
        text: 'It is my first post'
    },
    {
        id: 2,
        img: 'https://thumbs.dreamstime.com/b/print-146697723.jpg',
        text: 'It is my second post'
    },
    {
        id: 3,
        img: 'https://image.freepik.com/free-vector/_1441-271.jpg',
        text: 'It is my third post'
    },
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
