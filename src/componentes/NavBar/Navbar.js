import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loguito from '../../assest/loguito.jpg'
import './barranav.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const BarraNav = () =>  {
    return (
        <Navbar className="barraNav">
            <Container>
                <Row>
                    <Col>
                        <Link to="/" className='nav-link header-navlink'>
                            <img
                                src= {loguito}
                                className="d-inline-block align-center barraNav-logo"
                                alt="Logo de la taberna del heroe"
                            />Taberna del Heroe
                        </Link>
                    </Col>

                    <Col>
                        <Nav className="justify-content-end align-center barraNav-links">
                            <Link to="/" className='header-navlink m-4 text-decoration-none'>Inicio</Link>
                            <Link to="/productos/equipo" className='header-navlink m-4 text-decoration-none'>Equipo</Link>
                            <Link to="/productos/armas" className='header-navlink m-4 text-decoration-none'>Armas</Link>
                            <Link to="/productos/posiones" className='header-navlink m-4 text-decoration-none'>Posiones</Link>
                        </Nav>
                    </Col>

                    <Col>
                    <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default BarraNav;