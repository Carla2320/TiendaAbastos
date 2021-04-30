import React from 'react';
import TablaProductos from './tablaProductos';
import { useHistory } from "react-router-dom";
const VisualizarProducto = ({datos}) => {
    const history = useHistory();
    const registrarProductos = (event) => {
        history.push("/registrarProducto");
      };
      
    return(
        <div className="container mt-5" id="contenedor">
            <table class="table">
            <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Imagen</th>
      <th scope="col">Stock</th>
      <th scope="col">Precio</th>
      <th scope="col">Descripcion</th>
    </tr>
  </thead>
            {datos.map((datos,key)=>{
               return(<TablaProductos id={datos.num_productos} nombre={datos.nombre} 
               imagen={datos.imagen} estado={datos.estado} precio={datos.precio} descripcion={datos.descripcion}
           />)})}
           </table>
           <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            onClick={registrarProductos}
          >
            Ingresar Productos
          </button>
        </div>
        </div>
        );
}
export default VisualizarProducto;