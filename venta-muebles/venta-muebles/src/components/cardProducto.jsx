import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto({ruta, nombre, descripcion, precio, comprar}) {
  // const logo = require(`${ruta}`);
  // const imagesFolder = require.context('../assets', true);
  const r = "cama1"
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={imagesFolder('mini1.png').default.src} /> */}
      {/* <Card.Img variant="top" src={require(ruta).default} /> */}
      {/* <Card.Img variant="top" src={require(`${ruta}`)} /> */}
      <Card.Img variant="top" src={require(`../assets/${ruta}.png`)} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${precio}</Card.Subtitle>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button variant="primary" onClick={()=>comprar(ruta, nombre, descripcion, precio)}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;