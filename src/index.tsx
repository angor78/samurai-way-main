import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = () => {
  let state = store.getState()

  ReactDOM.render(
    <App state={state}
         dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
}

store.subscriber(renderTree)
renderTree()