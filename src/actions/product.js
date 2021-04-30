import { fetchSinToken } from "../helpers/fetch"
export const product = (num_productos,nombre,descripcion,precio,estado,porcentaje_descuento,imagen
  ) => {
    return async () => {
      console.log(
        "action",
        num_productos,nombre,descripcion,precio,estado,porcentaje_descuento,imagen
      );
      const resp = await fetchSinToken(
        "user/producto", {num_productos,nombre,descripcion,precio,estado,porcentaje_descuento,imagen },
        "POST"
      );
    };
  };
  

export const updateEstado = (num_productos,estado) => {
    return async () => {
      console.log("actualizado",num_productos, estado)
        const resp = await fetchSinToken('user/actualizarEstado',{num_productos,estado},'POST');
    }
}
