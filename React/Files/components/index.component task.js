import ReactDOM from "react-dom/client"
import Component from "./Component task"
import Component2 from "./Component2 task"
import Component3 from "./Component3 task"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
   
    <h1 style={{color : 'blue', textAlign : 'center'}}> Components Task</h1>

    <Component/>

    <Component2/>

    

    <Component3/>
    
    


  </>
)