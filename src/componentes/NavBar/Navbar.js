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
                                width="30"
                                height="30"
                                className="d-inline-block align-top barraNav-logo"
                                alt="Logo de la taberna del heroe"
                            />Taberna del Heroe
                        </Link>
                    </Col>

                    <Col>
                        <Nav className="justify-content-end barraNav-links">
                            <Link to="/" className='header-navlink'>Inicio</Link>
                            <Link to="/productos/equipo" className='header-navlink'>Equipo</Link>
                            <Link to="/productos/armas" className='header-navlink'>Armas</Link>
                            <Link to="/productos/posiones" className='header-navlink'>Posiones</Link>
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