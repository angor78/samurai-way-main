import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = () => {
  ReactDOM.render(
    <App store={store}
    />,
    document.getElementById('root')
  );
}

store.subscribe(()=>renderTree())
renderTree()