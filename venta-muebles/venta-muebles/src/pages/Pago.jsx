import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import CajaTexto from "../components/cajaTexto"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import SelectorDesplegable from "../components/selectorDesplegable";

function Pago() {
  const navigate = useNavigate();

  const {state} = useLocation();
  const { ruta, nombre, descripcion, precio } = state;

  const [numero, setNumero] = useState("")
  const [caducidad, setCaducidad] = useState("")
  const [titular, setTitular] = useState("")
  const [cvv, setCvv] = useState("")
  const [emisor, setEmisor] = useState("")
  const completarCompra = () => {
    navigate("/compras", {state: state})
  }
  const listaEmisores = ["Visa", "MasterCard", "American Express"]
  return (
    <>
      <Col xs={6} md={4}>
        <Image src={ruta} thumbnail  />
      </Col>
      <h1>
        {nombre} <Badge bg="secondary">{precio}</Badge>
      </h1>
        <h6>
        Costo de envío: $200.00
      </h6>
      <h5>
        Total: ${precio + 200}
      </h5>
      <h4>
        {descripcion}
      </h4>
    <Form onSubmit={completarCompra}>
      <CajaTexto nombre="Número" val={numero} setVal={setNumero} />
      <CajaTexto nombre="Caducidad" val={caducidad} setVal={setCaducidad} />
      <CajaTexto nombre="Titular" val={titular} setVal={setTitular} />
      <CajaTexto nombre="cvv" val={cvv} setVal={setCvv} />
      <SelectorDesplegable nombre="Emisor" val={emisor} setVal={setEmisor} lista={listaEmisores} />
      <Button variant="primary" type="submit" >Confirmar compra</Button>
    </Form>
    </>
  )
}
export default Pago;