export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Medusmo</h1>
      <nav className="space-x-4 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#work" className="hover:underline">Work</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
