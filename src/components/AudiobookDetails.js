import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const AudiobookDetails = () => {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);

  useEffect(() => {
    // Sample data - replace with a real API call if available
    const sampleAudiobooks = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel set in the Roaring Twenties...",
        genre: "Classic",
        rating: 4.5,
        coverImage: "https://example.com/great-gatsby.jpg",
        reviews: [
          { id: 1, user: "Alice", rating: 5, comment: "Loved it!" },
          { id: 2, user: "Bob", rating: 4, comment: "Great read." }
        ]
      },
      // Add more sample audiobooks here
    ];

    const foundAudiobook = sampleAudiobooks.find(book => book.id === parseInt(id));
    setAudiobook(foundAudiobook);
  }, [id]);

  const addReview = (review) => {
    review.id = audiobook.reviews.length + 1; // Generate a unique ID
    const updatedReviews = [...audiobook.reviews, review];
    const updatedAudiobook = { ...audiobook, reviews: updatedReviews };
    setAudiobook(updatedAudiobook);
  };

  if (!audiobook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="audiobook-details">
      <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover" />
      <h2>{audiobook.title}</h2>
      <h3>by {audiobook.author}</h3>
      <p><strong>Genre:</strong> {audiobook.genre}</p>
      <p><strong>Description:</strong> {audiobook.description}</p>
      <p><strong>Rating:</strong> {audiobook.rating}</p>
      <h4>Reviews</h4>
      <ReviewList reviews={audiobook.reviews} />
      <h4>Add a Review</h4>
      <ReviewForm audiobookId={id} onAddReview={addReview} />
    </div>
  );
};

export default AudiobookDetails;
