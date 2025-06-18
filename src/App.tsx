import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Preorder from './pages/Preorder'
import NewArrivals from './pages/NewArrivals'
import Collection from './pages/Collection'
import './App.css'

// Create a wrapper component that uses location
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div className="flex-1 w-full" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-order" element={<Preorder />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
