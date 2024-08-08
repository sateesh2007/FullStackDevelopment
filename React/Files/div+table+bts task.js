import ReactDOM from "react-dom/client"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from './images/tree 1.jpg'
import pic1 from './images/tree 1.jpg'
import pic2 from './images/tree 1.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <h1>Create below responsive Desing With bootstrap using react</h1>
               </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 
                  
                 
                  </div>
                  <div className="col-md-6">
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-4">
                  <img src={pic} alt="" className="img-fluid"/>
                  </div>
                  <div className="col-md-4">
                     <img src={pic1} alt=""   className="img-fluid"/>
                  </div>
                  <div className="col-md-4">
                     <img src={pic2} alt=""  className="img-fluid"/>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-12">
                     <h1 className="bg-warning" >CopyRights@2024</h1>
                     </div>
                  
                  </div>
               
            </div>
         
      
   </>
)



