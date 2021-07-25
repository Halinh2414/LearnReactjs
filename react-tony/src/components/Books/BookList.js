import React, { useContext } from 'react'

import { BooksContext } from '../../context/BookContext';

function BookList() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <ul>
        {books.length > 0 ? books.map(book => (
          <li key={book.title}>
            Title: {book.title}
          </li>
        )) : null}
      </ul>
    </div>
  )
}

export default BookList
