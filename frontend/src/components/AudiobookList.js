import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AudiobookList.css'; // Import the CSS file
import { baseUrl } from './BaseUrl';

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [filteredAudiobooks, setFilteredAudiobooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    genre: '',
    author: '',
    rating: ''
  });

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        // const response = await fetch('http://localhost:3000/api/audiobooks');
        // const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/audiobooks/`);
        const response = await fetch(`${baseUrl}/audiobooks/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAudiobooks(data);
        setFilteredAudiobooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching audiobooks:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAudiobooks();
  }, []);

  useEffect(() => {
    let filtered = audiobooks;

    if (filters.genre) {
      filtered = filtered.filter(audiobook => audiobook.genre === filters.genre);
    }

    if (filters.author) {
      filtered = filtered.filter(audiobook => audiobook.author.toLowerCase().includes(filters.author.toLowerCase()));
    }

    if (filters.rating) {
      filtered = filtered.filter(audiobook => audiobook.rating >= filters.rating);
    }

    setFilteredAudiobooks(filtered);
  }, [filters, audiobooks]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="audiobook-list-container">
      <div className="filters">
        <label>
          Genre:
          <select name="genre" value={filters.genre} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
          </select>
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={filters.author}
            onChange={handleFilterChange}
            placeholder="Search by author"
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
            placeholder="Minimum rating"
          />
        </label>
      </div>

      {filteredAudiobooks.length > 0 ? (
        <div className="audiobook-list">
          {filteredAudiobooks.map((audiobook) => (
            <div key={audiobook._id} className="audiobook-card">
              <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover" />
              <h2>{audiobook.title}</h2>
              <h3>by {audiobook.author}</h3>
              <p><strong>Genre:</strong> {audiobook.genre}</p>
              <p><strong>Description:</strong> {audiobook.description}</p>
              <p><strong>Rating:</strong> {audiobook.rating}</p>
              <Link to={`/audiobooks/${audiobook._id}`} className="details-link">View details</Link>
            </div>
          ))}
        </div>
      ) : (
        <div>No audiobooks found</div>
      )}
    </div>
  );
};

export default AudiobookList;
