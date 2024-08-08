import ReactDOM from 'react-dom/client'

import pic from './images/download (1).jpg'
const clr ={
    color : 'red'
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<h1>Inserting Image from src</h1>

     {/* first method */}

<h1 style={clr}>Inline Css</h1>

          {/* second method using curly braces */}

          < h1 style={{color : 'green'}}>SATEESH</h1>


<img src={pic} alt=''/>
  
</>
)