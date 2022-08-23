import logo from  '../logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';



function NavBarLogo(props) {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky="top">
        <Container className='d-flex' >
          <Navbar.Brand  className='brand m-2'>
            <Nav.Link as={Link} to={'/'} className='link-logo-home' >
            <img
              alt=""
              src={logo}
              className=" align-center img-fluid logoBotella"
            />
            </Nav.Link>

             
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto navLinks ">
              <Nav.Link as={Link} to={"/category/Vodkas"} className='text-warning '>Vodkas</Nav.Link>
              <Nav.Link as={Link} to={"/category/Vinostintos"} className='text-warning'>Vinos tintos</Nav.Link>
              <Nav.Link as={Link} to={"/category/Vinosblancos"} className='text-warning' >Vinos blancos</Nav.Link>
              <Nav.Link as={Link} to={"/category/Cervezas"} className='text-warning' >Cervezas</Nav.Link>
              <Nav.Link  as={Link} to={"/category/Gins"} className='text-warning' >Gins</Nav.Link>
            </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default NavBarLogo;