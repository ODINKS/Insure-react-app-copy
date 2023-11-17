
import './App.css';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import HeroSection from './components/molecules/global/HeroSection'
import Button from './components/molecules/global/Button';
import About from './pages/About';


import Home from "./pages/Home"



import React from 'react'

const App = () => {
  const buttonDesc = `Get started`;
  const buttonWidth = `500`;

  return (
    <div>
      {/* <Home/> */}
      {/* <Contact /> */}
      {/* <HeroSection title={title} img={img} description={description} /> */}
      {/* <Button description={buttonDesc} width={buttonWidth} /> */}
      <About />


    </div>
  )
}

export default App
