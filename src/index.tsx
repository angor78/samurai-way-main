import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = () => {
  let state = store.getState()

  ReactDOM.render(
    <App state={state}
         addPost={store.addPost.bind(store)}
         addMessage={store.addMessage.bind(store)}
         changeTextPost={store.changeTextPost.bind(store)}
         changeTextMessage={store.changeTextMessage.bind(store)}/>,
    document.getElementById('root')
  );
}

store.subscriber(renderTree)
renderTree()