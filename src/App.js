import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />
      <main className="px-6 py-12">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
