import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchArtworkDetails } from '../src/ArtworkService';
import CommentsForm from '../src/CommentsForm';
import back from '../src/back.png'
 
 
 
const dummyImageUrl = 'https://via.placeholder.com/843x843.png?text=Image+Not+Available';
 
const handleImgError = (event) => {
  event.target.src = dummyImageUrl;
};
 
const ArtworkDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const previousPage = location.state?.from || '/';
 
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchArtworkDetails(id);
        setArtwork(data.data);
      } catch (error) {
        setError('Error fetching artwork details');
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>No artwork found</p>;
 
  return (
   
    <div className='articletop'>
      <div className='col-md-12' >
      <div className='row'>
      <div className='col-md-4'>
      <Link to={previousPage} style={{marginRight:'200px', }} className='link1'><strong><img src={back} style={{width:'40px', height:'40px', }} alt=''></img></strong></Link>

 
      <img style={{height:'400px', width:'400px', marginTop:'20px'}} 
        src={
          artwork?.image_id
            ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
            : dummyImageUrl
        }
        alt={artwork?.title || 'Artwork image'}
        className="descriptionImage"
        onError={handleImgError}
      />
      </div>

      
     <div className='col-md-8' >
     <h1 style={{marginBottom:'50px'}}>{artwork.title}</h1>
      <p><strong>Artist:</strong> {artwork.artist_display}</p>
      <p><strong>Date:</strong> {artwork.date_display}</p>
      <p><strong>Reference Number:</strong> {artwork.main_reference_number}</p>
      <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
      </div>
      </div>
      </div>
      <CommentsForm />
      {/* </div> */}
     
              <div className='container-fluid'>
              <div className="row">
                <div className='col-md-12'>
                <div className="footer">
                  <h5 style={{backgroundColor:'black', color:'white',  margin:'auto',padding:'30px', fontFamily:"italic"}}>Marthala@07</h5>
                  </div>
                 
                  </div>
                  </div>
                 </div>
                  </div>
 
  );
};
 
export default ArtworkDetail;
 