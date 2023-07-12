import logo from './logo.svg';
import './App.css';
import React, {useContext, useState } from "react";
import { store } from "./store/store";
import { Routers } from './routers/Routers';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
const App=()=> {
  
  return (
    <Provider store={store}>
      <Navbar/>
        <Routers />
      </Provider>
  );
}

export default App;
