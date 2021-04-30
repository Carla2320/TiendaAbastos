import React, { useState } from "react";
import TablaProductos from './tablaProductos';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'

const VisualizarProducto = ({ datos }) => {
   
    const history = useHistory();
    const registrarProductos = (event) => {
        history.push("/registrarProducto");
    };
  
    const [busca, setBusca]=useState('');
    const filtrar= datos.filter(pro=>{
        return pro.nombre.toLowerCase().startsWith(busca.toLocaleLowerCase());
    })

    return (

        <Container>

            <FormGroup >
                <br/>
                <br/>
                <input
                    placeholder="Buscar por nombre"
                    className="form-control"
                    type="text"
                    name="busqueda"
                    value={busca}
                    onChange={(ev)=>setBusca(ev.target.value)}
                ></input>
            </FormGroup>

            <br />
            <Button className="btn btn-success btn-lg btn-block" onClick={registrarProductos}>Ingresar Nuevo Producto</Button>
            <br /> <br />
            <Table>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descuento</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                {filtrar.map((datos) => {
                    if(datos.estado==1){
                    return (<TablaProductos id={datos.num_productos} nombre={datos.nombre}
                        imagen={datos.imagen} estado={datos.estado} precio={datos.precio} descuento={datos.porcentaje_descuento} descripcion={datos.descripcion}
                    />)}
                })}
            </Table>
            {/* </table> */}
        </Container>


    );
}
export default VisualizarProducto;