import React, { useEffect, useState } from "react";
import { Button, Container, Form, FloatingLabel, Nav, Navbar, Card } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import { API_URL } from "../../configuration";
import { modifyFriend } from "../../api";
import "./style.sass";

export function ModifyPage() {
  const [friends, setFriends] = useState([] as any[]);
	const [validated, setValidated] = useState(false);
  const [friendId, setFriendId] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendComment, setFriendComment] = useState("");
  const [friendFavFood, setFriendFavFood] = useState("");
  const [friendRelationshipStatus, setFriendRelationshipStatus] = useState(4);
  const [selectedRelationshipStatus, setSelectedRelationshipStatus] = useState("");
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

  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    if(!friendName || !friendEmail || !friendFavFood || !friendRelationshipStatus){
      setValidated(true);
      return
    }
    multiselectSelect(friendRelationshipStatus)
    const friend = {
      id: friendId, 
      name: friendName,
      email: friendEmail,
      comment: friendComment,
      favFood: friendFavFood,
      relationshipStatus: friendRelationshipStatus
    }
    const modifiedFriend = await modifyFriend(friend);
    cancellation()
  }

  function cancellation(){
    setFriendName("");
    setFriendEmail("");
    setFriendComment("");
    setFriendFavFood("");
    // setFriendRelationshipStatus(4);
  }

  async function selectingFriend(friend: any){
    // setSelectedFriend(friend[0])
    setFriendId(friend[0].id)
    setFriendName(friend[0].name);
    setFriendEmail(friend[0].email);
    if(!friend[0].comment){
      setFriendComment("")
    } else {
      setFriendComment(friend[0].comment);
    }
    setFriendFavFood(friend[0].favFood);
    setFriendRelationshipStatus(friend[0].relationshipStatus);
    relationshipStatus(friend[0].relationshipStatus);
  }

  function relationshipStatus(status: number){
    setFriendRelationshipStatus(status);
    if(status === 0){
      setSelectedRelationshipStatus("Single");
    } else if(status === 1) {
      setSelectedRelationshipStatus("In relationship");
    } else {
      setSelectedRelationshipStatus("Married");
    }
  }

  function settingRelationshipStatus(event: React.FormEvent){
    setFriendRelationshipStatus(Object.values(event)[0].id)
  }

	function multiselectSelect(status: any) {
		if (status.length === undefined) {
			setMultiselectError("You must select a status!");
    } else {
      setMultiselectError("");
    }
	}

  return (
    <div className="edit-friend-container mt-5 pt-5 d-flex justify-content-center">
      <Navbar fixed="top" expand="sm" variant="light" className="navbar bg-light bg-gradient">
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
      <Card bg="light" className="mb-3" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="mb-3">Edit friend</Card.Title>
          <Form validated={validated}>
            <Form.Group>
              <Multiselect 
                options={friends} 
                className="mb-3 shadow bg-body rounded" 
                displayValue="name" 
                placeholder="Select the friend" 
                singleSelect
                onSelect={(e: any) => selectingFriend(e)} />
            </Form.Group>
            <Form.Group className="mb-3 shadow bg-body rounded">
              <FloatingLabel label="Name">
                <Form.Control
                  as="input"
                  type="text"
                  value={friendName}
                  required
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
            <Form.Group className="mb-3">
            <Multiselect
              placeholder={selectedRelationshipStatus}
              className={
                multiselectError
                  ? "multiselectError border border-danger shadow bg-body rounded"
                  : "multiselectWithoutError bg-white shadow bg-body rounded"
              }
              singleSelect
              selectedValues={relationshipStatus}
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