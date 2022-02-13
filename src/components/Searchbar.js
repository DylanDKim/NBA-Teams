import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Searchbar({ query, setQuery }) {
  return (
    <Form className="d-flex flex-row">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          size="sm"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Teams"
        />
      </Form.Group>
    </Form>
  );
}
