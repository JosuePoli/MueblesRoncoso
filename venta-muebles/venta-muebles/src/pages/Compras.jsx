import React from "react";
import TablaCompras from "../components/tablaCompras";
import { useLocation } from 'react-router-dom';

function Compras() {
  const {state} = useLocation();
  // const { ruta, nombre, descripcion, precio } = state;
  return (
    <>
      <h1>
        Mis Compras
      </h1>
      <TablaCompras lista={state ? [{ ruta: state.ruta, nombre: state.nombre, descripcion: state.descripcion, precio: state.precio }] : []}/>
    </>
  )
}
export default Compras;