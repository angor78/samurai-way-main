import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import state, {addPost, StatePropsType} from "./redux/state";


export const renderTree=(state:StatePropsType)=>{
  ReactDOM.render(
    <App state={state} addPost={addPost}/>,
    document.getElementById('root')
  );
}
renderTree(state)