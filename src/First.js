import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function First() {

    const navigate = useNavigate();

    function func(){
        navigate("/t")
    }

  return (
    <div><Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Unique ID : </Form.Label>
      <Form.Control type="email" placeholder="Enter ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name : </Form.Label>
      <Form.Control type="email" placeholder="Enter name" />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={func}>
      Submit
    </Button>
  </Form></div>
  )
}

export default First