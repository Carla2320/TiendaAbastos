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
  
// export const product = (num_productos,nombre,descripcion,precio,estado,porcentaje_descuento,imagen) => {
//     return async () => {
//         console.log("action",num_productos,nombre,descripcion,precio,estado,porcentaje_descuento,imagen);
//         const resp = await fetchSinToken('user/producto',{num_productos,nombre,descripcion,precio,estado,porcentaje_descuento, imagen},'POST');
//     }
// }

export const updateDate = (token,fecha_fin) => {
    return async () => {
        const resp = await fetchSinToken('sesion/actualizarFecha',{token,fecha_fin},'POST');
    }
}