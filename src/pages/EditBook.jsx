import  { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, updateBook } = useContext(BookContext);
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === parseInt(id));
    if (bookToEdit) {
      setBook(bookToEdit);
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setDescription(bookToEdit.description);
    } else {
      navigate('/');
    }
  }, [id, books, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...book,
      title,
      author,
      description,
    };

    updateBook(updatedBook);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
