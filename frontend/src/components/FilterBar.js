// import React from 'react';

// const FilterBar = ({ onFilterChange }) => {
//   return (
//     <div className="filter-bar">
//       <input type="text" placeholder="Search by author" onChange={e => onFilterChange('author', e.target.value)} />
//       <select onChange={e => onFilterChange('genre', e.target.value)}>
//         <option value="">All Genres</option>
//         <option value="fiction">Fiction</option>
//         <option value="non-fiction">Non-fiction</option>
//         <option value="fantasy">Fantasy</option>
//         <option value="mystery">Mystery</option>
//         <option value="romance">Romance</option>
//       </select>
//       <select onChange={e => onFilterChange('rating', e.target.value)}>
//         <option value="">All Ratings</option>
//         <option value="5">5 Stars</option>
//         <option value="4">4 Stars & up</option>
//         <option value="3">3 Stars & up</option>
//         <option value="2">2 Stars & up</option>
//         <option value="1">1 Star & up</option>
//       </select>
//     </div>
//   );
// };

// export default FilterBar;


// import React, { useState } from 'react';

// const FilterBar = ({ onFilterChange }) => {
//   const [genre, setGenre] = useState('');
//   const [author, setAuthor] = useState('');
//   const [rating, setRating] = useState('');

//   const handleGenreChange = (e) => {
//     setGenre(e.target.value);
//     onFilterChange({ genre: e.target.value, author, rating });
//   };

//   const handleAuthorChange = (e) => {
//     setAuthor(e.target.value);
//     onFilterChange({ genre, author: e.target.value, rating });
//   };

//   const handleRatingChange = (e) => {
//     setRating(e.target.value);
//     onFilterChange({ genre, author, rating: e.target.value });
//   };

//   return (
//     <div className="row mb-4">
//       <div className="col-md-4">
//         <label className="form-label">Genre</label>
//         <select className="form-select" value={genre} onChange={handleGenreChange}>
//           <option value="">All</option>
//           <option value="Classic">Classic</option>
//           <option value="Dystopian">Dystopian</option>
//         </select>
//       </div>
//       <div className="col-md-4">
//         <label className="form-label">Author</label>
//         <input type="text" className="form-control" value={author} onChange={handleAuthorChange} />
//       </div>
//       <div className="col-md-4">
//         <label className="form-label">Rating</label>
//         <input type="number" className="form-control" value={rating} min="1" max="5" step="0.1" onChange={handleRatingChange} />
//       </div>
//     </div>
//   );
// };

// export default FilterBar;


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
