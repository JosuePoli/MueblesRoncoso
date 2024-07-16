import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function SelectorDesplegable({nombre, val, setVal, lista}) {
  return (
    <>
    <Form.Label htmlFor={"id" + nombre}>{nombre}</Form.Label>
      <Col sm="6">
        <Form.Control
          as="select"
          id={"id" + nombre}
          value={val}
          onChange={(event)=>{setVal(event.target.value)}}
        >
          {lista.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </Form.Control>
      </Col>
    </>
  )
}

export default SelectorDesplegable