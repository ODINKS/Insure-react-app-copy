import './App.css';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import HeroSection from './components/molecules/global/HeroSection'
import Button from './components/molecules/global/Button';

function App() {
  const buttonDesc = `Get started`
  const buttonWidth = `500`
  return (
    <div >
      {/* <Home/> */}
      {/* <Contact /> */}
      {/* <HeroSection title={title} img={img} description={description} /> */}
      <Button description={buttonDesc} width={buttonWidth} />
    </div>
  );
}

export default App;
