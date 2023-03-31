import React from 'react';

// Komponenten skriver ut ytterligare attribut för den klickade boken.
export function Book(props) {
  // Om props.book är null så returneras en tom div. Annars returneras en div med bokens attribut. Attributen författare, title, förlag, språk och ämne skrivs ut.
  if (!props.book) {
    return <div></div>;
  } else {
    return (
      // En enkel struktur för visning av attributen returneras.
      <div>
        <div>
          <h3>Författare</h3>
          <p>{props.book.author_name}</p>
        </div>
        <div>
          <h3>Titel</h3>
          <p>{props.book.title}</p>
        </div>
        <div>
          <h3>Förlag</h3>
          <p>{props.book.publisher}</p>
        </div>
        <div>
          <h3>Språk</h3>
          <p>{props.book.language}</p>
        </div>
        <div>
          <h3>Ämnen</h3>
          <p>{props.book.subjects}</p>
        </div>
      </div>
    );
  }
}
