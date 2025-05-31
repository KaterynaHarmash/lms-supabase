import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-gray-900 text-white flex justify-between items-center shadow">
      <h1 className="text-lg font-bold tracking-tight">🌙 LMS</h1>
      <nav className="space-x-6 text-sm">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
        <Link to="/register" className="hover:text-blue-400 transition">Register</Link>
      </nav>
    </header>
  );
}
