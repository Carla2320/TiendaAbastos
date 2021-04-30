import React, {useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { product } from "../actions/product";

 const RegistrarProducto = () => {
 
  const estado = ["Activo", "Inactivo"];
  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    estado: "",
    descuento: "",
    imagen: ""
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const enviardatos = (event) => {
    event.preventDefault();
    if (datos.estado === "Activo") {
      datos.estado = 1;
    } else if (datos.estado === "Inactivo") {
      datos.estado = 0;
    }
    // console.log(
    //   datos.nombre +
    //     " " +
    //     datos.estado +
    //     " " +
    //     datos.imagen +
    //     " " +
    //     datos.descuento +
    //     " " +
    //     datos.precio +
    //     " " +
    //     datos.descripcion
    // );
    dispatch(product("", datos.nombre, datos.descripcion,datos.precio,datos.estado, datos.descuento, datos.imagen));

    Swal.fire("Datos Guardados Correctamente!", "", "success");
  };
  const visualizarP = (event) => {
    history.push("/visualizar");
  };
  
  const entradascombo = (name) => {
    let cargar = (
      <option width="20px" id="op" class="form-check-input" value={name}>
        {name}
      </option>
    );
    return cargar;
  };

  const detalle= () => {
    history.push("/DetalleProducto");
  };


  return (
    <div className="container mt-5" id="contenedor">
    <div className="row" id="subcontenedor">
      <h1 className="titulo">PRODUCTOS</h1>
      <form onSubmit={enviardatos}>
        <div className="form-group">
          <input
            placeholder="Nombre Producto"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <select
            name="estado"
            class="form-control"
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>Selecciona una opción
            </option>
            {estado.map((item) => {
              return entradascombo(item.toString());
            })}
          </select>
        </div>
        <div className="form-group">
          <input
            placeholder="Imagen"
            className="form-control"
            type="text"
            name="imagen"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <input
            placeholder="Descuento"
            className="form-control"
            type="number"
            name="descuento"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            placeholder="Precio"
            className="form-control"
            type="number"
            step="0.01"
            name="precio"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Descripcion"
            type="text"
            name="descripcion"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            name="enviar"
            onClick={handleInputChange}
          > Guardar
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            onClick={visualizarP}
          >
            Visualizar
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
          >
            Detalle Product
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default RegistrarProducto;
