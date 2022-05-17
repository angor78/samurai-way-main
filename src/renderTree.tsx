import {addMessage, addPost, changeTextMessage, changeTextPost, StatePropsType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: StatePropsType) => {
  ReactDOM.render(
    <App state={state}
         addPost={addPost}
         addMessage={addMessage}
         changeTextPost={changeTextPost}
         changeTextMessage={changeTextMessage}/>,
    document.getElementById('root')
  );
}