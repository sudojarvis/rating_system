import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <div key={review.id} className="review">
          <p><strong>{review.user}</strong> rated it {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
