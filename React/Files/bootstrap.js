import ReactDOM from "react-dom/client"

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import pic from'./images/tree 1.jpg'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
 
 <h2 className="text-warning">Bootstrap</h2>

 <button className="btn btn-success">Click</button>

 <img src={pic} alt=""  className="img-fluid"></img>


 

</>
)