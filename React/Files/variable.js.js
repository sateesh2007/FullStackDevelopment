import ReactDOM from 'react-dom/client'

//  Defining a variable

let uid = "sateesh"
let year = 2024
const root = ReactDOM.
    createRoot(document.getElementById('root'))
root.render(
<>
   <h1>Hello {uid}</h1>
   <h1>Year is {year}</h1>
</>
)