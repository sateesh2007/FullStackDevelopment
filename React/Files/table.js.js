import ReactDOM from 'react-dom/client'

let name = prompt('Enter Your Name')
let place = prompt('Enter Your Place')
let email = prompt('Enter Your Email')
const root = ReactDOM.
    createRoot(document.getElementById('root'))
root.render(
<>
   <table border = {2} align = 'center' style={{color:'yellow'}} >
    <tr>
        <td>name</td>
        <td>place</td>
        <td>email</td>
    </tr>

    <tr>
        <td>{name}</td>
        <td>{place}</td>
        <td>{email}</td>
    </tr>
   </table>
</>
)