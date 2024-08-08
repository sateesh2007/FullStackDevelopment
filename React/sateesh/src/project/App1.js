import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ArtworkList from './ArtworkList';
import ArtworkDetail from './ArtworkDetails';
 
const App1 = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg" id='back' style={{paddingTop:'30px'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" id="logo">
              <span className='app-title'>My Art Books</span>
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
                    <b>Gallery</b>
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
 
export default App1;
 
 