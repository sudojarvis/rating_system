// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReviewForm from './ReviewForm';
// import ReviewList from './ReviewList';

// const AudiobookCard = () => {
//   const { _id } = useParams();
//   const [audiobook, setAudiobook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAudiobook = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/audiobooks/${_id}`);
//         if (!response.ok) {

//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setAudiobook(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching audiobook:', error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchAudiobook();
//   }, [_id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
    
//     return (
  
//     <div>
//       message: {_id}
//       Error: {error}
//     </div>
//   );
//   }

//   if (!audiobook) {
//     return <div>No audiobook found</div>;
//   }

//   return (
//     <div className="audiobook-details">
//       <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover" />
//       <h2>{audiobook.title}</h2>
//       <h3>by {audiobook.author}</h3>
//       <p><strong>Genre:</strong> {audiobook.genre}</p>
//       <p><strong>Description:</strong> {audiobook.description}</p>
//       <p><strong>Rating:</strong> {audiobook.rating}</p>
//       {/* <h4>Reviews</h4>
//       <ReviewList reviews={audiobook.reviews} />
//       <h4>Add a Review</h4>
//       <ReviewForm audiobookId={id} /> */}
//     </div>
//   );
// };

// export default AudiobookCard;
