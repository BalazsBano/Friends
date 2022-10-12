import React, { useState } from "react";
import { Button, Container, Form, FloatingLabel, Nav, Navbar, Card, Dropdown, DropdownButton } from "react-bootstrap";
import { createNewFriend } from "../../api";
import "./style.sass";

export function NewFriendPage() {
	const [validated, setValidated] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendComment, setFriendComment] = useState("");
  const [friendFavFood, setFriendFavFood] = useState("");
  const [friendRelationshipStatus, setFriendRelationshipStatus] = useState(0);

  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    if(!friendName || !friendEmail || !friendFavFood || !friendRelationshipStatus){
      setValidated(true);
      return
    }
    const friend = {
      name: friendName,
      email: friendEmail,
      comment: friendComment,
      favFood: friendFavFood,
      relationshipStatus: friendRelationshipStatus
    }
    const createFriend = createNewFriend(friend)
    cancellation()
  }

  function cancellation(){
    setFriendName("");
    setFriendEmail("");
    setFriendComment("");
    setFriendFavFood("");
    setFriendRelationshipStatus(0);
  }

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

    <Card bg="light">
      <Card.Body>
        <Card.Title>New friend</Card.Title>
          <Form validated={validated}>
            <Form.Group className="mb-3">
              <FloatingLabel label="Name">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendName}
                  required
                  autoFocus
                  onChange={(e) => setFriendName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Email">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendEmail}
                  required
                  onChange={(e) => setFriendEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Comment">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendComment}
                  onChange={(e) => setFriendComment(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Favorite food">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendFavFood}
                  required
                  onChange={(e) => setFriendFavFood(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <DropdownButton id="dropdown-basic-button" title="Relationship status">
                <Dropdown.Item onClick={() => setFriendRelationshipStatus(0)}>Single</Dropdown.Item>
                <Dropdown.Item onClick={() => setFriendRelationshipStatus(1)}>In relationship</Dropdown.Item>
                <Dropdown.Item onClick={() => setFriendRelationshipStatus(2)}>Married</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Form>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </Card.Body>
    </Card>
    </div>
  )
}