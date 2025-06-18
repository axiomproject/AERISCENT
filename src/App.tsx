import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Preorder from './pages/Preorder'
import NewArrivals from './pages/NewArrivals'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pre-order" element={<Preorder />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
