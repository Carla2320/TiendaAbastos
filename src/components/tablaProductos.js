import React from "react";
const TablaProductos = ({ id, nombre, imagen, estado, precio, descripcion }) => {

  //   const [datos] = useState({
  //     nombre:nombre,
  //     imagen:imagen,
  //     stock:stock,
  //     precio:precio,
  //     descripcion:descripcion
  // })

  // const enviardatos =(event) =>{
  //   event.preventDefault();
  //   console.log(datos)
  // }

  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{nombre}</td>
          <td>
            <img src={imagen} width="80" />
          </td>
          <td>{estado}</td>
          <td>{precio}</td>
          <td>{descripcion}</td>
          <td>
            <button class="btn btn-primary" type="submit" >
              Editar
            </button>
          </td>
          <td>
            <button class="btn btn-primary" type="submit" >
              Inactivar
            </button>
          </td>
        </tr>
      </tbody>
      
    </>
  );
};
export default TablaProductos;
