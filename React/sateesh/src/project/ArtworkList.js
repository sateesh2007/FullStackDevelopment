import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArtworks, searchArtworks, filterArtworksByCategory } from './artworkService';
import Pagination from './Pagination';
import SearchFilter from './SearchFilter';
//import "./styles.css";
 
 
const dummyImageUrl = 'https://via.placeholder.com/843x843.png?text=Image+Not+Available';
 
 
const handleImgError = (event) => {
  event.target.src = dummyImageUrl;
};
 
const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await searchArtworks(searchTerm);
        } else if (category) {
          data = await filterArtworksByCategory(category);
        } else {
          data = await fetchArtworks(currentPage);
        }
        setArtworks(data.data);
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        setError('Error fetching artworks');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, searchTerm, category]);
 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
 
  const handleFilter = (category) => {
    setCategory(category);
    setCurrentPage(1);
  };
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
 
  return (
    <div>
      <h1 className="headingtop">Artwork List</h1>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} className="searchtop" />
      <ul className='articletop'>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`} style={{ textDecoration: 'none', color: 'brown' }}>
              <h2 className='articletop'>{artwork.title}</h2>
             
              <img
                src={
                  artwork?.image_id
                    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
                    : dummyImageUrl
                }
                alt={artwork?.title || 'Artwork image'}
                className='articletop'
                onError={handleImgError} style={{width:'350px',borderRadius:'10px'}}
              />
             
              {/* <img src={artwork.thumbnail.lqip} alt={artwork.title} style={{width:"300px"}} className='articletop' /> */}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
     
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
 
export default ArtworkList;
 