import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';



import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>
);

