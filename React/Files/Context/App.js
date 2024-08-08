import { createContext } from 'react'
import Home from './Home'
export const context = createContext()
function App() {
  let uid = 'Sateesh'

  return (
    <> 

      <context.Provider value={uid}>
        <Home />
      </context.Provider>
    </>
  )
}
export default App

