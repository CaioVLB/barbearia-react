import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function Navbar2() {
    const navigate = useNavigate();

  return (
    <Navbar expand="md" style={{width: '100%', backgroundColor: '#1085'}} class>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: '#fff'}} />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: '#fff'}}>
          <Nav>
            <Nav.Link onClick={() => {navigate("/corte")}}>CORTES</Nav.Link>
            <Nav.Link onClick={() => {navigate("/barba")}}>BARBAS</Nav.Link>
            <Nav.Link onClick={() => {navigate("/sombrancelha")}}>SOMBRANCELHAS</Nav.Link>
            <Nav.Link onClick={() => {navigate("/controle")}}>CONTROLE DE SERVIÇO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2