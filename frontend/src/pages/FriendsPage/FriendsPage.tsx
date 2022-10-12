import React, { useEffect, useState, Component } from "react";
import { Button, Container, Nav, Navbar, Card, Stack } from "react-bootstrap";
import { API_URL } from "../../configuration";
import { useNavigate } from "react-router-dom";
import "./style.sass";

export function FriendsPage() {
  const [friends, setFriends] = useState([] as any[]);
	const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}friends/list`)
    .then(res => res.json())
    .then(
      (result) => {
        setFriends(result);
      }
    )
  }, [])
  const allFriend = [] as any[];
  friends?.map((item: any) => {
    allFriend.push(item)
  })
 
  return (
    <div className="friends-container mt-5 pt-5 d-flex justify-content-center">
      <Navbar fixed="top" expand="sm" variant="light" className="navbar bg-light bg-gradient">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="new" className="text-primary">New friend</Nav.Link>
            <Nav.Link href="modify" className="text-primary">Edit friend</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="mx-auto">
      {allFriend.map((item: any, index: any) => {
        return (
          <div key={index}>
              <Card className="mb-3" style={{ width: '20rem' }}>
                <Card.Body>
                  <Stack gap={1}>
                    <Card.Header>{item.id}. {item.name}</Card.Header>
                    <Card.Subtitle className="my-2">Email: {item.email}</Card.Subtitle>
                    <Card.Text>Comment: {item.comment}</Card.Text>
                    <Card.Text>Favorite food: {item.favFood}</Card.Text>
                    <Card.Text>Relationship Status: {item.relationshipStatus}</Card.Text>
                  </Stack>
                </Card.Body>
              </Card>
          </div>
        )
      })}
    </div>
    </div>
  )
}