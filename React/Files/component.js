import ReactDOM from "react-dom/client"
// component

function Comp() {
  return <h1>Hello Component</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <h2>Components</h2>

    <Comp />

  </>
)