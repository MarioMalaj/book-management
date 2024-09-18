import PropTypes from 'prop-types';
import BookForm from './BookForm';

function EditBookForm({ book, updateBook }) {
  const handleFormSubmit = (updatedBook) => {
    updateBook(updatedBook);
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <BookForm initialBook={book} onSubmit={handleFormSubmit} />
    </div>
  );
}

EditBookForm.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default EditBookForm;
