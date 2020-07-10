import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./data/state";

export let renderEntireTree = (data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App messages={data.messages}
           dialogs={data.dialogs}
           posts={data.posts}
           friends={data.friends}
           addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
