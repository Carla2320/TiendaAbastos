import React from "react";
import { Redirect,BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import RegistrarProducto from "../components/registrarProductos";
import TablaProductos from "../components/tablaProductos";
import VisualizarProducto from "../components/visualizarProductos";
import ProductoLista from "../containers/productoLista";


export const Routers = () => {
  return (
    <>
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={App} />
          <Route exact path="/registrarProducto" component={RegistrarProducto} />
          <Route exact path="/visualizar" component={ProductoLista} />
          <Redirect to="/registrarProducto" />
        </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};
