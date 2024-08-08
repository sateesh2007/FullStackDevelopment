 import ReactDOM from 'react-dom';
import './style-bmi.css'
 
let name=prompt("Enter Your Name")
let weight=prompt("Enter You Weight")
let height=prompt("Enter Your Height")
let age=prompt("Enter Your age")

 
let h1=height*height

let ms

let bmi=weight/h1
if(bmi<=18.5)
    {
        ms='underweight'
    }
    else if(bmi>=18.5 && bmi<=25)
    {
        ms='normal'
    }
    else if(bmi>=25 && bmi<=30)
    {
        ms='overweight'
    }
    else
    {
        ms='Obesity'
    }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<h1> {ms} </h1>
    
<table border = {10} align = 'center'  >
    <tr className='m'>
        <td>name</td>
        <td>height</td>
        <td>weight</td>
        <td>age</td>
        <td>value</td>
    </tr>

    <tr>
    <td >{name}</td>
        <td >{height}</td>
        <td >{weight}</td>
        <td >{age}</td>
        <td>{ms}</td>
    </tr>
   </table>
  </>
)



// import ReactDOM from 'react-dom';
 
// var rupees = prompt("enter the rupees");
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h2 >Convert rupees into dollar is {rupees * 85}</h2>

  
//   </>
//  );