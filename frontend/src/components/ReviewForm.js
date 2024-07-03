import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file
import { baseUrl } from './BaseUrl';

const ReviewForm = ({ audiobookId, onReviewAdded }) => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Prepare review data to send
    const review = {
      name, // Correctly send 'name' as 'user'
      rating,
      comment: reviewText, // Correctly send 'reviewText' as 'comment'
    };

    try {
      // const response = await fetch(`http://localhost:3000/api/audiobooks/${audiobookId}/reviews`, {
      const response = await fetch(`${baseUrl}/audiobooks/${audiobookId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const newReview = await response.json();
      onReviewAdded(newReview); // Notify parent component of the new review
      setName(''); // Clear form fields
      setReviewText('');
      setRating(1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="form-control"
        >
          {[1, 2, 3, 4, 5].map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="reviewText">Review:</label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
      {error && <p className="error-message">Error: {error}</p>}
    </form>
  );
};

export default ReviewForm;
