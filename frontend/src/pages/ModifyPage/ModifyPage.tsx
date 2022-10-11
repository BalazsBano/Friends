import React, { useEffect, useState, Component } from "react";
import { Button, Container, Modal, Nav, Navbar, ListGroup, Form, Card, Stack } from "react-bootstrap";
import { API_URL } from "../../configuration";
import "./style.sass";

export function ModifyPage() {

  return (
    <div className="friends-container">
      <Navbar fixed="top" bg="light" expand="sm" variant="light" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Friends</Nav.Link>
            <Nav.Link href="new">New friend</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Modify</h1>
      <Card>

      </Card>
    </div>
  )
}