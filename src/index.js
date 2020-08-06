import React from "react";
import ReactDOM from "react-dom";
import {DataLayer} from './component/DataLayer'
import reducer ,  {initialState} from './component/reducer'


import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState}  reducer={reducer}> 
      <App />
    </DataLayer>
  </React.StrictMode>,
  rootElement
);
