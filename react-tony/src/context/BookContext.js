import { createContext, useState } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  function addBook(name) {
    const newBook = {
      title: name
    }
    setBooks(prevState => [...prevState, newBook])
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        addBook
      }}
    >
      { children }
    </BooksContext.Provider>
  )
}