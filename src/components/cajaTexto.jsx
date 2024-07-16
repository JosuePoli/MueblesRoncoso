import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function CajaTexto({nombre, val, setVal}) {
  return (
    <>
    <Form.Label htmlFor={"id" + nombre}>{nombre}</Form.Label>
      <Col sm="6">
        <Form.Control
          id={"id" + nombre}
          value={val}
          onChange={(event)=>{setVal(event.target.value)}}
        />
      </Col>
    </>
  )
}

export default CajaTexto