import React from "react";
import { Redirect,BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import RegistrarProducto from "../components/registrarProductos";


export const Routers = () => {
  return (
    <>
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={App} />
          <Route exact path="/registrarProducto" component={RegistrarProducto} />
          <Redirect to="/registrarProducto" />
        </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};
