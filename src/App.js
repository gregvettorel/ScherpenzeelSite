import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarOld from "./components/NavbarOld";
import HeroOld from "./components/HeroOld";
import FooterOld from "./components/FooterOld";
import CalendarOld from "./pages/CalendarOld";
import ServicesOld from './pages/ServicesOld';

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans min-h-screen">
        <NavbarOld />

        <main>
          <Routes>
            <Route path="/" element={<HeroOld />} />
            <Route path="/services" element={<ServicesOld />} />
            <Route path="/calendar" element={<CalendarOld />} />
          </Routes>
        </main>

        <FooterOld />
      </div>
    </Router>
  );
}

export default App;
