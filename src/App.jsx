import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Welcome to LMS</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
