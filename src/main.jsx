// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {configureStore} from "reduxjs/toolkit"
// import {Provider} from "react-redux"
// import userReducer from './Features/User'

// const store = configureStore({
//   //reducers
//   reducer: {
//     user: userReducer
//   }
// })

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Features/User";
import themeReducer from "./Features/theme";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
