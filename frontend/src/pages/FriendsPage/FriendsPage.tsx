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
  console.log(allFriend)
 
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
                    <Button variant="outline-secondary" size="sm" type="button" onClick={() => {navigate("/modify"); console.log('test')}}>Edit</Button>
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