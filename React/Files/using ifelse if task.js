import ReactDOM from "react-dom/client"
 
let msg=new Date()
let d=msg.getHours()
let a=""
let color 

if(d<12){
a="gud mrng"
color= 'red'
}
else if(d>=12 && d<=17){
    a="gud afternoon"
    color='blue'
}
else{
    a="gud evng"
    color='yellow'
}
 
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
{Date()}

<h1 style={{color}}>{a}</h1>
</>
)