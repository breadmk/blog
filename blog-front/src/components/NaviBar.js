import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Call } from "../ApiService";
import { API_BASE_URL } from "../app-config";

const ACCESS_TOKEN = "ACCESS_TOKEN";

const NaviBar = () => {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = sessionStorage.getItem("ACCESS_TOKEN");

  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  //로그아웃 함수
  const sessionNull = () => {
    sessionStorage.clear();
  };

  // console.log(Call("/"));
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
        <Navbar style={{ color: "white" }}>회원정보</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {accessToken == null ? <NaviLinkJoin /> : <NaviLinkWrite />}
            {accessToken == null ? (
              <NaviLinkLogin />
            ) : (
              <NaviLinkOnLogin sessionNull={sessionNull} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

//component
const NaviLinkLogin = (props) => {
  return (
    <Nav.Link>
      <Link
        to="/auth/loginForm"
        style={{
          paddingLeft: 13,
          textDecoration: "none",
          color: "white",
        }}
      >
        로그인
      </Link>
    </Nav.Link>
  );
};

const NaviLinkOnLogin = (props) => {
  const { sessionNull } = props;
  return (
    <Nav.Link>
      <Link
        to="/"
        style={{
          paddingLeft: 13,
          textDecoration: "none",
          color: "white",
        }}
        onClick={() => {
          sessionNull();
        }}
      >
        로그아웃
      </Link>
    </Nav.Link>
  );
};

const NaviLinkWrite = (props) => {
  return (
    <Nav.Link>
      <Link
        to="/board/form"
        style={{
          paddingLeft: 13,
          textDecoration: "none",
          color: "white",
        }}
      >
        글쓰기
      </Link>
    </Nav.Link>
  );
};
const NaviLinkJoin = (props) => {
  return (
    <Nav.Link>
      <Link
        to="/auth/joinForm"
        style={{
          paddingLeft: 13,
          textDecoration: "none",
          color: "white",
        }}
      >
        회원가입
      </Link>
    </Nav.Link>
  );
};

export default NaviBar;
