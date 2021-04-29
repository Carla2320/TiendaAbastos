import logo from './logo.svg';
import './App.css';
import React, {useContext, useState } from "react";
import { store } from "./store/store";
import { Routers } from './routers/Routers';
import { Provider } from 'react-redux';
const App=()=> {
  
  return (
    <Provider store={store}>
        <Routers />
      </Provider>
  );
}

export default App;
