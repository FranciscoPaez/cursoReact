import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget/CartWidget';
import {Link} from 'react-router-dom'


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/'>
        <Navbar.Brand href="#">PzGaming</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Arma tu PC</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Todos los productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Procesadores y Coolers CPU
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Memorias RAM
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Placas de Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Gabinetes, fuentes y coolers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                Monitores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10">
                Teclados y Mouses
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action11">
                Ofertas de tiempo limitado
              </NavDropdown.Item>
              
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contactenos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;