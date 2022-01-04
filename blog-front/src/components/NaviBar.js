import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{ paddingLeft: 13, textDecoration: "none", color: "white" }}
          >
            BreadMk
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/user/loginForm"
                style={{
                  paddingLeft: 13,
                  textDecoration: "none",
                  color: "white",
                }}
              >
                로그인
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/user/joinForm"
                style={{
                  paddingLeft: 13,
                  textDecoration: "none",
                  color: "white",
                }}
              >
                회원가입
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
