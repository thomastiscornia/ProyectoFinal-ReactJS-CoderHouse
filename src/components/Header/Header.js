import logo from  '../logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../Cart/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import SaludoHome from '../IntroHome/IntroHome';
import './Header.css'
export default function Header() {

    return (
    <>
    <Navbar collapseOnSelect expand="lg"  className='navbar w-100' sticky='top'>
            <Container fluid className='d-flex justify-content-center' >
                <Navbar.Brand className='brand m-2'>
                    <Nav.Link as={Link} to={'/'} className='link-logo-home' >
                        <img
                            alt=""
                            src={logo}
                            className=" mx-auto img-fluid logoMate"
                        />
                        <hr></hr>
                        <p className='text-light navbar-text'> Weekend Delivery</p>
                    </Nav.Link>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav color-light">
                    <TiThMenu className='button-toggler' />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto navLinks fs-4 fw-bold ">
                        <Nav.Link as={Link} to={"/category/Vodkas"} className='text-warning '>Vodkas</Nav.Link>
                        <Nav.Link as={Link} to={"/category/Gins"} className='text-warning'>Gins</Nav.Link>
                        <Nav.Link as={Link} to={"/category/VinosBlancos"} className='text-warning' >Vinos Blancos</Nav.Link>
                        <Nav.Link as={Link} to={"/category/VinosTintos"} className='text-warning' >Vinos Tintos</Nav.Link>
                        <Nav.Link as={Link} to={"/category/Cervezas"} className='text-warning' >Cervezas</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <SaludoHome/>
    </>    

    )
}