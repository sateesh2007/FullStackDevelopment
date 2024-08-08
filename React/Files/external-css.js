import ReactDOM from 'react-dom/client'

import pic from './images/download (1).jpg'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<img src={pic} alt=''/>
<h1 className='txt'>External css</h1>
<h1 className='txt1'>External css</h1>
<h1 className='txt2'>External css</h1>


  
</>
)