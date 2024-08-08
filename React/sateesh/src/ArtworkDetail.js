// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const ArtworkDetail = ({ match }) => {
//   const [artwork, setArtwork] = useState(null);
//   const history = useHistory(); // Use useHistory hook for navigation

//   useEffect(() => {
//     fetch(`https://api.artic.edu/api/v1/artworks/${match.params.id}`)
//       .then(response => response.json())
//       .then(json => {
//         setArtwork(json.data);
//       })
//       .catch(error => {
//         console.error('Error fetching artwork:', error);
//       });
//   }, [match.params.id]); // Dependency array includes match.params.id

//   if (!artwork) return <div>Loading...</div>;

//   return (
//     <div className="container mt-5">
//       <button className="btn btn-secondary mb-3" onClick={() => history.push('/')}>
//         Back to List
//       </button>
//       <h1>{artwork.title}</h1>
//       <h5>{artwork.artist_titles}</h5>
//       <p>{artwork.date_display}</p>
//       <p>Main Reference Number: {artwork.main_reference_number}</p>
//       <img
//         src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
//         alt={artwork.title}
//         style={{ width: '100%', height: 'auto' }} // Ensure image scales well
//       />
//       <p>Dimensions: {artwork.dimensions}</p>
//     </div>
//   );
// };

// export default ArtworkDetail;
