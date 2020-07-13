import store from './data/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let renderEntireTree = (store) => {

  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        addPost={store.addPost.bind(store)}
        inputMessage={store.inputMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getData());

store.subscribe(renderEntireTree);