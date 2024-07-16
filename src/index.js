import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Registro from './pages/Registro';
import Productos from './pages/Productos';
import Compras from './pages/Compras';
import Pago from './pages/Pago';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registro />
  },
  {
    path: "/productos",
    element: <Productos />
  },
  {
    path: "/compras",
    element: <Compras />
  },
  {
    path: "/pago/:producto?",
    element: <Pago />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="productos">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="compras">Mis compras</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <RouterProvider router={router}/>
    </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
