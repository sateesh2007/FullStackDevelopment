import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ArtworkList from '../src/ArtworkList';
import ArtworkDetail from '../src/ArtworkDetails';
import '../src/Style.css'
 
const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid' style={{}}>
        <div className='col-md-12'> </div>
        <nav className="navbar navbar-expand-lg" id='back' style={{ height:'100px' }}>
       
          <div className="container">
            <Link className="navbar-brand" to="/" id="logo">
              <span className='app-title'><h1>My Art Books</h1></span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/ArtworkList">
                    
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ArtworkList />} />
          <Route path="/ArtworkList" element={<ArtworkList />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
 
export default App;