import React, { Component } from "react";
import axios from "axios";
import VisualizarProducto from "../components/visualizarProductos";
import RegistrarProducto from "../components/registrarProductos";

class ProductoLista extends Component {
  state = {
    datos: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3030/api/user/visualizarP")
      .then((res) => {
        const datos = res.data;
        console.log(datos)
        this.setState({ datos });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
 
    const { datos } = this.state;
    const json = JSON.stringify(datos);
    localStorage.setItem("productos", json);
    return <VisualizarProducto datos={datos} />
  }
}
export default ProductoLista;
