
import { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ initialBook, onSubmit }) {
  const [title, setTitle] = useState(initialBook?.title || '');
  const [author, setAuthor] = useState(initialBook?.author || '');
  const [description, setDescription] = useState(initialBook?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...initialBook,
      title,
      author,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Book</button>
    </form>
  );
}

BookForm.propTypes = {
  initialBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  initialBook: null,
};

export default BookForm;
