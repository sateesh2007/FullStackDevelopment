import ReactDOM from "react-dom/client"
 import uid, { course ,duration,demo } from'./module'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
 <h2>IMPORT AND EXPORT</h2>
 <h1>{uid}</h1>
 <h1>{course}</h1>
 <h1>{duration}</h1>
 <h1>{demo()}</h1>
 

</>
)