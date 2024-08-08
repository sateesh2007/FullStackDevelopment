import ReactDOM from "react-dom/client"

import nav from './images/stump.jpg'
import navimg from './images/logo.jpg'

import pic from './images/msd..jpg'
import pic1 from './images/msd..jpg'
import pic2 from './images/msd..jpg'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={navimg} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="" aria-expanded="false">
                players
              </a>
              <ul className="dropdown-menu">
                <li><a classaNme="dropdown-item" href="#">DHONI</a></li>
                <li><a className="dropdown-item" href="#">KOHLI </a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">ROHIT</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={nav} className="d-block w-100" height={450} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={nav} className="d-block w-100" height={450} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={nav} className="d-block w-100" height={450} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-4">

          <div className="card" >

            <img src={pic} className="card-img-top" alt="..." />

            <div className="card-body">

              <h5 className="card-title">Mahendra</h5>

              <p className="card-text">Dhoni was born on 7 July 1981 in Ranchi, Bihar (now in Jharkhand) in a Hindu Rajput family to Pan Singh and Devaki Devi.[4] His parents hailed from Lwali village in Uttar Pradesh (now Uttarakhand) and he was the youngest of three children.[5][6][7] His family spells the surname as "Dhauni".[8] The spelling "Dhoni" emerged due to a spelling mistake in his school certificates and, despite repeated attempts by his family, has never been rectified</p>

              <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card">

            <img src={pic1} className="card-img-top" alt="..." />

            <div className="card-body">

              <h5 className="card-title">Singh</h5>

              <p className="card-text">Dhoni was born on 7 July 1981 in Ranchi, Bihar (now in Jharkhand) in a Hindu Rajput family to Pan Singh and Devaki Devi.[4] His parents hailed from Lwali village in Uttar Pradesh (now Uttarakhand) and he was the youngest of three children.[5][6][7] His family spells the surname as "Dhauni".[8] The spelling "Dhoni" emerged due to a spelling mistake in his school certificates and, despite repeated attempts by his family, has never been rectified.</p>

              <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card">

            <img src={pic2} className="card-img-top" alt="..." />

            <div className="card-body">

              <h5 className="card-title">Dhoni</h5>
              <p>Dhoni was born on 7 July 1981 in Ranchi, Bihar (now in Jharkhand) in a Hindu Rajput family to Pan Singh and Devaki Devi.[4] His parents hailed from Lwali village in Uttar Pradesh (now Uttarakhand) and he was the youngest of three children.[5][6][7] His family spells the surname as "Dhauni".[8] The spelling "Dhoni" emerged due to a spelling mistake in his school certificates and, despite repeated attempts by his family, has never been rectified.</p>

              <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>
            <div className="container"></div>

          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" ></div>
        <h1 className="bg-info"  >CopyRights@2024</h1>
      </div>
    </div>







  </>
)



