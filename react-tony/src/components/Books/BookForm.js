import React, { useContext, useState } from 'react'

import { BooksContext } from '../../context/BookContext';

function BookForm() {
  const [name, setName] = useState('')
  const { addBook } = useContext(BooksContext);

  return (
    <div>
      Book: <input type="text" onChange={e => setName(e.target.value)}/> 
      <button type="button" onClick={() => addBook(name)}>Add</button>
    </div>
  )
}

export default BookForm
