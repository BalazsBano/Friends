import React, { useState } from "react";
import { Button, Container, Form, FloatingLabel, Nav, Navbar, Card } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import { createNewFriend } from "../../api";
import "./style.sass";

export function NewFriendPage() {
	const [validated, setValidated] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendComment, setFriendComment] = useState("");
  const [friendFavFood, setFriendFavFood] = useState("");
  const [friendRelationshipStatus, setFriendRelationshipStatus] = useState(4);
	const [multiselectError, setMultiselectError] = useState("");
  const relStatus = [{
    id: 0,
    name: 'Single'
  },
  {
    id: 1,
    name: 'In relationship'
  },
  {
    id: 2,
    name: 'Married'
  }]

  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    if(!friendName || !friendEmail || !friendFavFood || !friendRelationshipStatus){
      setValidated(true);
      return
    }
    multiselectSelect(friendRelationshipStatus)
    const friend = {
      name: friendName,
      email: friendEmail,
      comment: friendComment,
      favFood: friendFavFood,
      relationshipStatus: friendRelationshipStatus
    }
    const createFriend = createNewFriend(friend);
    cancellation()
  }

  function cancellation(){
    setFriendName("");
    setFriendEmail("");
    setFriendComment("");
    setFriendFavFood("");
    setFriendRelationshipStatus(0);
  }

  function settingRelationshipStatus(event: React.FormEvent){
    setFriendRelationshipStatus(Object.values(event)[0].id)
  }

	function multiselectSelect(status: any) {
    console.log(status.length)
		if (status.length === undefined) {
			setMultiselectError("You must select a status!");
    } else {
      setMultiselectError("");
    }
	}

  return (
    <div className="new-friends-container mt-5 pt-5 d-flex justify-content-center">
      <Navbar fixed="top" expand="sm" variant="light" className="navbar bg-light bg-gradient">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Friends</Nav.Link>
            <Nav.Link href="modify">Edit friend</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Card bg="light" className="mb-3" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className="mb-3">New friend</Card.Title>
          <Form validated={validated}>
            <Form.Group className="mb-3 shadow bg-body rounded">
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
            <Form.Group className="mb-3 shadow bg-body rounded">
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
            <Form.Group className="mb-3 shadow bg-body rounded">
              <FloatingLabel label="Comment">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendComment}
                  onChange={(e) => setFriendComment(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3 shadow bg-body rounded">
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
            <Form.Group  className="mb-3 shadow bg-body rounded">
              <Multiselect
              placeholder="Relationship status"
                className={
                  multiselectError
                    ? "multiselectError border border-danger rounded"
                    : "multiselectWithoutError"
                }
                singleSelect
                displayValue="name"
                options={relStatus}
                onSelect={(e) => {settingRelationshipStatus(e); multiselectSelect(e)}}
                onRemove={(e) => {multiselectSelect(e)}}
              />
            </Form.Group>
              {multiselectError && <p className="text-danger text-center">{multiselectError}</p>}
          </Form>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </Card.Body>
    </Card>
    </div>
  )
}