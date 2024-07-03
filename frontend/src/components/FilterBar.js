


import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [minRating, setMinRating] = useState('');

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onFilterChange({ genre: e.target.value, author, minRating });
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    onFilterChange({ genre, author: e.target.value, minRating });
  };

  const handleMinRatingChange = (e) => {
    setMinRating(e.target.value);
    onFilterChange({ genre, author, minRating: e.target.value });
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
        <label className="form-label">Minimum Rating</label>
        <input type="number" className="form-control" value={minRating} min="1" max="5" step="0.1" onChange={handleMinRatingChange} />
      </div>
    </div>
  );
};

export default FilterBar;
