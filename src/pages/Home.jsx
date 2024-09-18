import  { useContext } from 'react';
import BookList from '../components/BookList';
import AddBook from './AddBook';
import { BookContext } from '../context/BookContext';

function Home() {
  const { books, deleteBook } = useContext(BookContext);

  return (
    <div>
      <h1 className="text-center mt-4">Book Management System</h1>
      <div className="container mt-4">
        <AddBook />
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default Home;
