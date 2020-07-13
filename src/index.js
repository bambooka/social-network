import data, {addPost, inputMessage} from './data/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {subscribe} from "./data/state";

export let renderEntireTree = (data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App messages={data.messages}
           dialogs={data.dialogs}
           posts={data.posts}
           friends={data.friends}
           addPost={addPost}
           inputMessage={inputMessage}
           currentInput={data.currentPost}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(data);

subscribe(renderEntireTree)
