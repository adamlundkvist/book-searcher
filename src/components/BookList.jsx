import React from 'react';

import Table from 'react-bootstrap/Table';

import '../style/navbar.css';

// Komponenten som listar böckerna.
export function BookList(props) {
  const bookList = props.books;
  const slicedBookList = bookList.slice(0, 30);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Publish Date</th>
        </tr>
      </thead>
      <tbody>
        {slicedBookList.map((result, index) => {
          return (
            <tr key={index} onClick={() => props.displayBook(index)}>
              <td>{result.author_name}</td>
              <td>{result.title}</td>
              <td>{result.first_publish_year}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
