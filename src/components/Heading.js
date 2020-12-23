import { Container, Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";
import React from "react";

export const Heading = () => {
  return (
    <Navbar color="" dark>
      <Container>
        <NavbarBrand>
          <h1>
            <strong>My Classrooms</strong>
          </h1>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Create Classroom
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
