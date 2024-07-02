import React, { useState } from 'react';

const ReviewForm = ({ audiobookId, onAddReview }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { rating: parseInt(rating), comment, audiobookId, user: "Anonymous" };
    onAddReview(review);
    setRating(1); // Reset form fields after submission
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
