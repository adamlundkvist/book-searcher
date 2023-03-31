import React, { useState } from 'react';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// Importerar komponenter.
import { BookList } from './components/BookList';
import { SearchBar } from './components/SearchBar';
import { Book } from './components/Book';

import { Footer } from "./components/Footer";

export default function App() {
  // Tre statekonstanter. En för sökfältets input, en för sökresultatet och en för att kunna visa uttökad information om den nuvarande boken.
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeBook, setActiveBook] = useState(null);

  function search() {
    // Funktionen bygger ut länken genom att konkatinera inputen till första början av länken för en lyckad sökning.

    const uri = 'https://openlibrary.org/search.json?title=' + query;
    // Fetch körs sedan med den konkatinerade strängen. Den fungerar nu som en URI. results får sedan det hämtade värdet.
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setResults(data.docs));
  }

  function handleQuery(event) {
    // Denna funktionen hanterar inputfältets sträng och gör om eventuella mellanslag till ett plustecken för att en sökning med två ord även ska fungera.
    const input = event.target.value;
    const handledInput = input.replace(/ /g, '+');

    // Konstanten query tilldelas värdet av denna hanterade input som nu är en ny sträng. Denna konstant konkatineras senare med uri för att skapa en fullständig query.
    setQuery(input);
  }

  // Funktion som sätter värdet av activeBook. Den används för att den klickade boken ska visa sina attribut.
  function displayBook(index) {
    setActiveBook(results[index]);
  }

  // Sedan returneras SearchBar, Book och BookList.
  return (
    <div>
      <Container>
        <h3>Search Books</h3>
        <SearchBar query={query} handleQuery={handleQuery} search={search} />
        <Book book={activeBook} />
        <BookList books={results} displayBook={displayBook} />
        <Footer />
      </Container>
    </div>
  );
}
