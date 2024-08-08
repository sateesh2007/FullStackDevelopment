import ReactDOM from 'react-dom/client'

//  Defining variable

let result
let marks = prompt("Enter Your marks")
if(marks<35){
    result=("fail")
}else{
    result=("pass")

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>

        <h1>IF ELSE</h1>

        {/* Declaring variable */}

        <h1>{result}</h1>

    </>
)