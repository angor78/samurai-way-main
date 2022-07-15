import React from 'react';
import './index.css';
import store from "./redux/redux-store";
// import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';



import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);


// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </BrowserRouter>
//   ,
//   document.getElementById('root')
// )
