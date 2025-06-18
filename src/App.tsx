import Navbar from './pages/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 w-full">
        <Home />
      </div>
    </div>
  )
}

export default App
