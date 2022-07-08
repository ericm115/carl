import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar varient="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Button href="#">Sign Up</Button>
      </Container>
    </Navbar>
  );
}
