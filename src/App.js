import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Write a powerfull password</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City </Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="City"
          defaultValue="Viana do Castelo"
        />
        <Form.Control.Feedback> Campo Preenchido </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {" "}
          Campo Não preenchido
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFile">
        <Form.Label> Defaul file Input </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label> Defaul Color Input </Form.Label>
        <Form.Control type="color" defaultValue="#5623de" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label> Slide Input </Form.Label>
        <Form.Range />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
