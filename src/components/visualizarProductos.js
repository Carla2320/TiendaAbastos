import React, { useState } from "react";
import TablaProductos from './tablaProductos';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'
function buscando(busqueda) {
    return function (s) {
        return s.num_productos.includes(busqueda) || !busqueda;
    }
}


const VisualizarProducto = ({ datos }) => {
   
    const history = useHistory();
    const registrarProductos = (event) => {
        history.push("/registrarProducto");
    };

    const [buscar, setDatos] = useState({
        busqueda: "",
    });

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const dato=datos;
    const [busca, setBusca]=useState('');
//    const filtro =datos.filter((dato)=>dato.startWith(busca));


    return (

        <Container>

            <FormGroup >
                <input
                    placeholder="Buscar"
                    className="form-control"
                    type="text"
                    name="busqueda"
                    value={busca}
                    onChange={(ev)=>setBusca(ev.target.value)}
                ></input>
            </FormGroup>

            <br />
            <Button color="success" onClick={registrarProductos}>Ingresar Nuevo Producto</Button>
            <br /> <br />
            <Table>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                {datos.map((datos) => {
                    if(datos.estado==1){
                    return (<TablaProductos id={datos.num_productos} nombre={datos.nombre}
                        imagen={datos.imagen} estado={datos.estado} precio={datos.precio} descripcion={datos.descripcion}
                    />)}
                })}
            </Table>
            {/* </table> */}
        </Container>


    );
}
export default VisualizarProducto;