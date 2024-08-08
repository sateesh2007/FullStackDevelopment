import ReactDOM from "react-dom/client"
 
let obj = new Date()
let h= obj .getHours()

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>

<h1>{Date()}</h1>

<h2>{h}</h2>
</>
)