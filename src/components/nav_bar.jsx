import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/logo.png";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <div
              style={{
                backgroundImage: `url(${logo})`,
                width: "80px",
                height: "60px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="d-inline-block align-center"
            ></div>
          </Navbar.Brand>
          <Nav className="justify-content-center">
          <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#developer">Developer</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Button style={{ width: "120px" }}>Code</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
