import ReactDOM from 'react-dom/client'

import pic from './images/download (1).jpg'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<h1>Inserting Image from src</h1>
<img src={pic} alt=''width={200}/>
<br/>
<img src='logo192.png' alt=''/>
  
</>
)