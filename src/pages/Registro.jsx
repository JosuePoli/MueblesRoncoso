import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import CajaTexto from "../components/cajaTexto"
function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

  const ingresar = () => {
    console.log(usuario)
    console.log(password)
    navigate("/productos");
  }
  return (
    <Form onSubmit={ingresar}>
      <CajaTexto nombre="Usuario" val={usuario} setVal={setUsuario} />
      <CajaTexto nombre="Password" val={password} setVal={setPassword} />
      <Button variant="primary" type="submit" >Ingresar</Button>
    </Form>
  )
}
export default Registro;