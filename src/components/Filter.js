import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onFilterChange({ genre: e.target.value, author, rating });
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    onFilterChange({ genre, author: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ genre, author, rating: e.target.value });
  };

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Genre</label>
        <select className="form-select" value={genre} onChange={handleGenreChange}>
          <option value="">All</option>
          <option value="Classic">Classic</option>
          <option value="Dystopian">Dystopian</option>
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Author</label>
        <input type="text" className="form-control" value={author} onChange={handleAuthorChange} />
      </div>
      <div className="col-md-4">
        <label className="form-label">Rating</label>
        <input type="number" className="form-control" value={rating} min="1" max="5" step="0.1" onChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default Filter;
