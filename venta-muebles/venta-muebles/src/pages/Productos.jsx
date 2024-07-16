import React, { useState, useEffect, useCallback  } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CardProducto from "../components/cardProducto"
function Productos() {
  const navigate = useNavigate();

  const [buscar, setBuscar] = useState("")
  const [cargado, setCargado] = useState(false)
  const [productosBuscados, setProductosBuscados] = useState([]);

  const productos = [
    {
      ruta:"cama1",
      nombre:"Colchon Brand",
      descripcion: "Capa Superior de Colchón Acolchada de Poliéster y Látex de Alta Elasticidad, 5Cm de Espesor, Transpirable y Antideslizante con Diseño Plegable para Uso Diario - 1Pc",
      precio: 5034.00
    },
    {
      ruta:"cama2",
      nombre:"Sealy",
      descripcion: "Colchón de Espuma de Memoria Azul Ultra-Suave - Confort de Látex, Cubierta de Algodón, Soporte de Muelles, Sensación Mullida - Perfecto para Uso Doméstico",
      precio: 5437.54
    },
    {
      ruta:"cama3",
      nombre:"Xpand colchon",
      descripcion: "Juego de colchón de látex refrescante de verano con 2 fundas de almohada, transpirable, suave, color sólido, tapete para dormir plegable de un solo lado con 85% de látex y 15% de relleno de algodón, solo lavado a mano - Juego de 3 piezas",
      precio: 2455.43
    },
    {
      ruta:"mini1",
      nombre:"minisplit TRANE",
      descripcion: "Aire Acondicionado Compacto para Ventana con Deflector de Viento - Impermeable, No Necesita Energía, Ideal para Enfriar y Purificar el Aire Aire Acondicionado Portátil Aire Acondicionado Portátil",
      precio: 6754.43
    },
    {
      ruta:"mini2",
      nombre:"MiniSplit UA inverter",
      descripcion: "Aire acondicionado ajustable, deflector de plástico para rejillas de aire acondicionado, guía de flujo extensible de 55.88-102.87 cm, protección contra la condensación, ahorro de energía, no necesita electricidad.",
      precio: 6547.53
    },
    {
      ruta:"mini3",
      nombre:"Mini Carrier",
      descripcion: "Aires acondicionados portátiles para uso personal, Ventilador de aire acondicionado mini con tanque de agua, Enfriador evaporativo con 7 colores, Luz nocturna para habitación pequeña, cocina, hogar y oficina",
      precio: 8764.43
    },
    {
      ruta:"sala1",
      nombre:"Sala azul",
      descripcion: "1pc Sillón de tela de lino de mediados de siglo, sillón de ocio para balcón, dormitorio, apartamento pequeño, marco de madera maciza, cómodo sillón individual",
      precio: 23645.56
    },
    {
      ruta:"sala2",
      nombre:"Sofa cama",
      descripcion: "Sillón Reclinable Versátil de Un Solo Asiento - Ajustable en 5 Niveles, Diseño Plegable para Leer y Relajarse en la Sala de Estar o Dormitorio",
      precio: 5765.76
    },
    {
      ruta:"sala3",
      nombre:"Sala doble",
      descripcion: "Conjunto de muebles para patio al aire libre con loveseat de mimbre, mesa de centro y mesa auxiliar - Juego de sillas de ratán duradero para jardín, patio trasero y balcón - Incluye cojines impermeables y orificio para sombrilla",
      precio: 7656.66
    }
  ]

  const buscarProducto = (event) => {
    event.preventDefault()
    let pf = [];
    if (buscar.trim() !== "") {
      pf = productos.filter(p => p.nombre.toLowerCase().includes(buscar.toLowerCase()))
    } else {
      pf = productos
    }
    setProductosBuscados(pf);
  }

  useEffect(() => {
    if (!cargado) {
      setProductosBuscados(productos);
      setCargado(true)
    }
  });

  const irAPagar = (ruta, nombre, descripcion, precio) => {
    navigate(
      "/pago",
      {state: {
        ruta: ruta,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
      }}
    );
  }
  return (
    <Container>
      <Form onSubmit={(event) => buscarProducto(event)}>
        <Stack direction="horizontal" gap={3}>          
          {/* <Col sm="6"> */}
            <Form.Control
              className="p-2"
              id="idBuscar"
              value={buscar}
              onChange={(event)=>{setBuscar(event.target.value)}}
            />
          {/* </Col> */}
          <Button className="p-2 ms-auto" variant="primary" type="submit" >Buscar</Button>
        </Stack>
      </Form>
      <Row xs={1} md={2} className="g-4">
        {productosBuscados.map((p,idx) =>(
          <Col key={idx}>
          <CardProducto ruta={p.ruta} nombre={p.nombre} descripcion={p.descripcion} precio={p.precio} comprar={irAPagar}/>
        
      </Col>))}
    </Row>
    </Container>
  )
}
export default Productos;