
import React from 'react';
import prev from '../src/prev.jpg'
import next from '../src/next.jpg'

 
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };
 
  return (
    <div className='bottom'>
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        <img src={prev} alt='' style={{width:'80px', height:'80px', borderRadius:'50px'}}></img>
      </button>
      <span>Page  {currentPage}   of   {totalPages} </span>
      <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
        <img src={next} alt='' style={{width:'80px', height:'80px'}}></img>
      </button>
    </div>
  );
};
 
export default Pagination;