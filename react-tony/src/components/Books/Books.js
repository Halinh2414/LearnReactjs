import React from 'react'

import { BooksProvider } from '../../context/BookContext';

import BookForm from './BookForm';
import BookList from './BookList';

function Books() {
  return (
    <BooksProvider>
      <BookForm />
      <BookList />
    </BooksProvider>
  )
}

export default Books
