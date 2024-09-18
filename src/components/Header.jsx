
import { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import PropTypes from 'prop-types';

function Header() {
  const { searchBooks } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchBooks(e.target.value); 
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h1 className="navbar-brand">Book Management</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setView: PropTypes.func,
};

export default Header;
