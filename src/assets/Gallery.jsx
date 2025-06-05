
import { useState } from 'react';

const booksData = [
  {
    id: 1,
    title: "The song of ice and fire",
    year: 1960,
    
  },
  {
    id: 2,
    title: "Freedom Fighters",
    year: 1963,
    
  },
  {
    id: 3,
    title: "Pride and Kenya",
    year: 2011,
  },
  {
    id: 4,
    title: "The Great war",
    year: 1925,
  },
  {
    id: 5,
    title: "The Umayyads",
    year: 1951,

  },
  {
    id: 6,
    title: "Rome",
    year: 1954,
  },
  {
    id: 7,
    title: "The Massais",
    year: 1935,
  }
];

function BookItem({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Year: {book.year}</p>
    </div>
  );
}

function BookList({ books }) {
  return (
    <div>
      <h2>Book Collection</h2>
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default function App() {
  const [books] = useState(booksData);

  return (
    <div>
      <h1>My Library</h1>
      <BookList books={books} />
    </div>
  );
}
