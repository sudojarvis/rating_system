import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [filteredAudiobooks, setFilteredAudiobooks] = useState([]);

  useEffect(() => {
    const sampleAudiobooks = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        rating: 4.5,
        coverImage: "https://example.com/great-gatsby.jpg"
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        rating: 4.8,
        coverImage: "https://example.com/1984.jpg"
      },
      {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        rating: 4.7,
        coverImage: "https://example.com/to-kill-a-mockingbird.jpg"
      }
    ];

    setAudiobooks(sampleAudiobooks);
    setFilteredAudiobooks(sampleAudiobooks);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = audiobooks;

    if (filters.genre) {
      filtered = filtered.filter(audiobook => audiobook.genre === filters.genre);
    }
    if (filters.author) {
      filtered = filtered.filter(audiobook => audiobook.author === filters.author);
    }
    if (filters.rating) {
      filtered = filtered.filter(audiobook => audiobook.rating >= filters.rating);
    }

    setFilteredAudiobooks(filtered);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="audiobook-list">
        {filteredAudiobooks.map(audiobook => (
          <div key={audiobook.id} className="audiobook-item">
            <Link to={`/audiobooks/${audiobook.id}`}>
              <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover" />
              <h3>{audiobook.title}</h3>
              <p>{audiobook.author}</p>
              <p>Genre: {audiobook.genre}</p>
              <p>Rating: {audiobook.rating}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudiobookList;
