import ReactDOM from "react-dom/client"
import App from './App'
import p from './images/msd..jpg'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<>
 {/* <App name = "sateesh" place = "pdtr"/>
 <App name = "sateesh" place = "pdtr"/>
 */}

<App pic = {p} price = ':Infinite'></App>

</>
)