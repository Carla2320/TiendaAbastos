import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEstado } from "../actions/product";
import { useHistory } from "react-router-dom";
import ModalEditarProductos from "./modalEditarProductos";

const TablaProductos = ({ id, nombre, imagen, estado, precio,descuento, descripcion }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const Actualizar = () => {
        estado = 0;
        dispatch(updateEstado(id, estado));
    }


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
                    <td>{descuento}</td>
                    <td>{descripcion}</td>
                    <td>
                        {/* <button class="btn btn-primary" type="submit">
                        
                        
                            Editar</button>{" "} */}
                            <ModalEditarProductos/>
                        <button class="btn btn-primary" type="submit" onClick={Actualizar} >
                            Inactivar
            </button>
                    </td>
                </tr>
            </tbody>

        </>
    );
};
export default TablaProductos;
