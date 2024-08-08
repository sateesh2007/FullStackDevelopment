import ReactDOM from 'react-dom/client'

//  Defining a variable

let uid = "sateesh"
let year = 2024
let children = ['honey','chinnu','vedh','chiru']
let person = {
    fname : 'sateesh',
    lname : 'Reddy',
    age : 24
    
}
const root = ReactDOM.
    createRoot(document.getElementById('root'))
root.render(
<>
   <h1>Hello {uid}</h1>
   <h1>Year is {year}</h1>
   <h1>{children}</h1>
   <h1>{children[1]}</h1>
   <h1>{person.lname}</h1>
</>
)