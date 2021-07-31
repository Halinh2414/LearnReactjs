import React, { useContext } from 'react'

import { BooksContext } from 'context/BookContext';


import { AppContext } from 'context/AppContext';


function BookList() {
  const { books } = useContext(BooksContext);

  const appContext = useContext(AppContext);

  console.log('appContext', appContext)

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
