import ReactDOM from "react-dom/client"
 
let msg=new Date()
let h=msg.getHours()

 
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
<h1>{Date()}</h1>
<h1 >{h}</h1>
</>
)