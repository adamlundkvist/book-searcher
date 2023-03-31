import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// Komponenten SearchBar innehåller sökfunktionen med sin tillhörande knapp.
export function SearchBar(props) {
  // Props används för att kunna invokera funktioner och hantera värden från App.js.
  return (
    <div>
      <InputGroup
        className="mb-3"
        value={props.query}
        onChange={props.handleQuery}
      >
        <Form.Control
          placeholder="Book title"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={props.search}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
}
