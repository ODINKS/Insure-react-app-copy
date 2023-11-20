import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/auth/admin/login'
import Reset from './pages/auth/admin/reset'
import TEAMINVITE from './pages/auth/admin/teamInvite'
// import Navbar from './components/molecules/global/Navbar';
// import Contact from './pages/Contact';
// import Button from './components/molecules/global/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Registration } from './pages/auth/admin/Registration';
// import { Reg } from './pages/auth/admin/Reg';
// import { RegAccount } from './pages/auth/admin/RegAccount';




function App() {
  return (
      // <div>
      //     {/* <Navbar /> */}
      // <Home />
      //     {/* <div className='w-full h-[90vh] flex justify-center items-center'>
      //         <h1 className='text-4xl text-[--black-text]'>Welcome</h1>
      //     </div> */}
      // </div>
    
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
  );
}


export default App
