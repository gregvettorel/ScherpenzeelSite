import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Calendar from "./pages/Calendar";
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
