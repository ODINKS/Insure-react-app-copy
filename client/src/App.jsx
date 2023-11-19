import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
// import Navbar from './components/molecules/global/Navbar';
// import Contact from './pages/Contact';
// import Button from './components/molecules/global/Button';
import { Routes, Route } from 'react-router-dom';
// import { Registration } from './pages/auth/admin/Registration';
// import { Reg } from './pages/auth/admin/Reg';
// import { RegAccount } from './pages/auth/admin/RegAccount';




function App() {
  return (
    // <div>
    //   {/* <Navbar /> */}
    //   {/* <Registration /> */}
    //   {/* <Reg /> */}
    //   {/* <RegAccount /> */}
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  );
}

export default App
