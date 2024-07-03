import React from 'react';
import './ReviewList.css'; // Import the CSS file

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <div className="no-reviews">No reviews yet.</div>;
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h5 className="review-user">{review.user}</h5> {/* Display the reviewer's name */}
          <p className="review-comment">{review.comment}</p> {/* Changed from `text` to `comment` */}
          <p className="review-rating">Rating: {review.rating}</p>
          {/* <small>{new Date(review.date).toLocaleDateString()}</small> Optionally format the date */}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
