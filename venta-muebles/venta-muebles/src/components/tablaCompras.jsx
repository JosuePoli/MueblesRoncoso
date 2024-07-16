import Table from 'react-bootstrap/Table';
function TablaCompras({lista}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Artículo</th>
          <th>Precio unitario</th>
          <th>Precio de envío</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {lista.map((c, idx) => (
          <tr>
            <td>{c.ruta}</td>
            <td>{c.nombre}</td>
            <td>${c.precio}</td>
            <td>$200.00</td>
            <td>${c.precio + 200}</td>
          </tr>
        ))
        }
      </tbody>
    </Table>
  );
}

export default TablaCompras