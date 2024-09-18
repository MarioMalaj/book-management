
import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
    setFilteredBooks([...books, newBook]); 
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks); 
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks); 
  };

  const searchBooks = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowercasedTerm) ||
        book.author.toLowerCase().includes(lowercasedTerm) ||
        book.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredBooks(result);
  };

  return (
    <BookContext.Provider
      value={{ books: filteredBooks, addBook, updateBook, deleteBook, searchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
