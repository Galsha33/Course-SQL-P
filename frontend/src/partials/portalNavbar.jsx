import React from "react";
import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const PortalNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand>Courses Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>Python</Nav.Link>
              <Nav.Link>Docker</Nav.Link>
              <Nav.Link>Java</Nav.Link>
              <Nav.Link>Javascript</Nav.Link>
              <Nav.Link>Mongo</Nav.Link>
              <Nav.Link>SQL</Nav.Link>
              <Nav.Link>React</Nav.Link>
              <Nav.Link>Username
              </Nav.Link>
              <Nav.Link>
                <Button className="btn-warning" onClick={logout}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
export default PortalNavbar;
