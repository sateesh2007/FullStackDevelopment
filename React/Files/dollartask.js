import ReactDOM from 'react-dom';
 
var rupees = prompt("enter the rupees");

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2 >Convert rupees into dollar is {rupees * 85}</h2>

  
  </>
);