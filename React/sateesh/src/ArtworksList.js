// const ArtworksList = () => {
//     const [state, setState] = useState([]);
//     const [next, setNext] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
   
//     useEffect(() => {
//       fetch(`https://api.artic.edu/api/v1/artworks?page=${next}`)
//         .then(response => response.json())
//         .then(json => {
//           setState(json.data);
//           setTotalPages(json.pagination.total_pages);
//         });
//     }, [next]);
   
//     const handlerNext = () => {
//       if (next < totalPages) {
//         setNext(next + 1);
//       }
//     };
   
//     const handlerPrev = () => {
//       if (next > 1) {
//         setNext(next - 1);
//       }
//     };
   
    
//   return (
//     <div className='container'>
//       <div className='row'>
//         {state.map((index) => (
//           <div className="col-md-4 mb-4" key={index.id}>
//             <div className="card bg-dark text-light">
//               <img
//                 src={`https://www.artic.edu/iiif/2/${index.image_id}/full/843,/0/default.jpg`}
//                 className="card-img-top img-fluid mb-2"
//                 alt={index.title}
//                 style={{ height: '350px', width: 'auto' }}
//               />
//               <div className="card-body d-flex flex-column align-items-center" style={{ height: '500px', width: '300px' }}>
//                 <h4 className="text-center">{index.title} - {index.artist_titles}</h4>
//                 <Link to={`/details/${index.id}`} className="btn btn-primary mt-2">View Details</Link>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         <div className='d-flex justify-content-between mt-3'>
//           <button className='btn btn-primary' onClick={handlerPrev}>Previous Page</button>
//           <button className='btn btn-primary' onClick={handlerNext}>Next Page</button>
//         </div>
//         <h1 className='text-center mt-3' style={{ color: 'red' }}>Page {next} of {totalPages}</h1>
//       </div>
//       </div>
//     );
//   };
   