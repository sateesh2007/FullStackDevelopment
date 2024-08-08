import ReactDOM from "react-dom/client"
 
let msg=new Date()
let d=msg.getDay()
let a

if(d==1){
a="monday"
}else if(d==2){
    a="tuesday"
}else if(d==3){
    a="wedneday"
}else if(d==4){
    a="thursday"
}
else if(d==5){
    a="friday"
}
else if(d==6){
    a="saturday"
}
else{
    a="sunday"
}
 
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
<h1>if else condition</h1>
<h1>{a}</h1>
</>
)