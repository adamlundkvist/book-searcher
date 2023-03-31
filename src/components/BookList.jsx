import React from 'react';

import Table from 'react-bootstrap/Table';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../style/navbar.css';

// Komponenten som listar böckerna.
export function BookList(props) {
  const bookList = props.books;
  const slicedBookList = bookList.slice(0, 30);
  return (
    <>
      {slicedBookList.map((result, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <td>{result.author_name}</td>
              <td>{result.first_publish_year}</td>
              <Button
                variant="primary"
                onClick={() => props.displayBook(index)}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
