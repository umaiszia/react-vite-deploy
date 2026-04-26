import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from './components/Footer';
import AboutPage from "./pages/AboutPage"; 
import Construction from './pages/Construction';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar is ABOVE the routes so it shows on every page */}
        <Navbar /> 

        <main className="flex-grow">
          <Routes>
            {/* The "/" path is your Homepage */}
            <Route path="/" element={<Home />} />
            
            {/* These paths are for your buttons */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<Construction title="Our Team" />} />
            <Route path="/services" element={<Construction title="Our Services" />} />
          </Routes>
        </main>

        {/* Footer is BELOW the routes so it shows on every page */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;