import ReactDOM from "react-dom/client"

import './style1.css'
import Banner from "./Banner"
 import Link from "./Link"
 import Ourservices from "./Ourservices"
 import Heading from "./Heading"
 import Footer from "./Footer"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<><div className="container">

   
    <Banner/>
    <Link/>
    <Ourservices/>
    <Heading/>
    <Footer/>
    
    </div>
    </>
    
)