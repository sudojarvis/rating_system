import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import './AudiobookDetails.css'; // Import the CSS file

const AudiobookDetails = () => {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudiobook = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/audiobooks/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch audiobook details');
        }
        const data = await response.json();
        setAudiobook(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAudiobook();
  }, [id]);

  const handleReviewAdded = (newReview) => {
    setAudiobook((prevAudiobook) => ({
      ...prevAudiobook,
      reviews: [...prevAudiobook.reviews, newReview],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="audiobook-details-container">
      <div className="audiobook-details">
        <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover" />
        <div className="audiobook-info">
          <h2>{audiobook.title}</h2>
          <h3>by {audiobook.author}</h3>
          <p><strong>Genre:</strong> {audiobook.genre}</p>
          <p><strong>Description:</strong> {audiobook.description}</p>
          <p><strong>Rating:</strong> {audiobook.rating}</p>
        </div>
      </div>
      <div className="audiobook-reviews">
        <h4>Reviews</h4>
        <ReviewList reviews={audiobook.reviews} />
        <h4>Add a Review</h4>
        <ReviewForm audiobookId={id} onReviewAdded={handleReviewAdded} />
      </div>
    </div>
  );
};

export default AudiobookDetails;
