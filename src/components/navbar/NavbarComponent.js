import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../icons/logo.svg";
import { Search } from "./Search";
import { Col, Container, Navbar, Row } from "react-bootstrap";

import "./effects.css";

export const NavbarComponent = () => {
  return (
    // <nav className="navbar navbar-expand-sm navbar-white bg-white">
    <Container>
      <Row>
        <Col>
          <Navbar expand="sm">
            <Navbar.Brand>
              <img src={logo} alt="logo" width="56" />
            </Navbar.Brand>

            <Navbar.Collapse>
              <Search />
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>

    // </nav>
  );
};
