
import './App.css'

import Authentication from './Pages/Authentication'
import HomePage from './Pages/HomePage'

function App() {

  const user = true


  return (
    <div>
      {
        user ? <HomePage /> : <Authentication />
      }
    </div>
  )
}

export default App

