
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookList({ books, deleteBook }) {
  return (
    <div className="container mt-4">
      <h2>Book List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <Link to={`/edit/${book.id}`} className="btn btn-warning btn-sm me-2">
                  Edit
                </Link>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
