import store from './data/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let renderEntireTree = (store) => {

  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        // метод dispatch вызывается в жестко определенном контексте - объект store
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getData());

store.subscribe(renderEntireTree);