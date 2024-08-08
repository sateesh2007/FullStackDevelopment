import ReactDOM from "react-dom/client"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App'
import p1 from './images/mob4.jpg'
import p2 from './images/mob2.jpg'
import p3 from './images/mob1.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<>
 
< div className="container">
        <div className="row">
                <div className="col-md-4 text-center">
                <App pic = {p1} price='10000'/>
        </div>
        
        
                <div className="col-md-4 text-center">
                <App pic = {p2} price='10000'/>
        </div>
        

   
                <div className="col-md-4 text-center">
                <App pic = {p3} price='10000'/>
        </div>
       
        </div>
        
        

</div>
</>
)