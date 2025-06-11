
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavbarComponent.css";
function NavbarComponent() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase ">
          Gerenciador de Tarefas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "active fw-bold" : "")}
            >
              Gerenciador de Tarefas
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cadastrar"
              className={({ isActive }) => (isActive ? "active fw-bold" : "")}
            >
              Cadastrar Usuário
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cadastrar-tarefa"
              className={({ isActive }) => (isActive ? "active fw-bold" : "")}
            >
              Cadastrar Tarefa
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
