import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loguito from '../../assest/loguito.jpg'
// import style from './NavBar.css'

const BarraNav = () =>  {
    return (
        <Navbar className="barraNav" bg="light">
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand href="#home">
                            <img
                                src= {loguito}
                                width="30"
                                height="30"
                                className="d-inline-block align-top barraNav-logo"
                                alt="Logo de la taberna del heroe"
                            />
                        </Navbar.Brand>
                    </Col>

                    <Col></Col>
                    
                    <Col>
                        <Nav className="me-auto barraNav-links">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Tienda</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default BarraNav;