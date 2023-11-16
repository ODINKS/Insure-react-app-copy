import './App.css';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import HeroSection from './components/molecules/global/HeroSection'

function App() {
  // const title = `<span>Pick <span className=text-orange-600>a</span> Plan<span>`;
  // const img = `https://ik.imagekit.io/7ziooaysi/svgtopng/dashboard.png?updatedAt=1700115699168`;
  // const description = `Welcome to INsure, your partner in revolutionizing the insurance
  // industry! – a powerful tool designed to empower insurance agents
  // like you to excel in your profession.`;
  return (
    <div >
      <Home/>
      {/* <Contact /> */}
      {/* <HeroSection title={title} img={img} description={description} /> */}
    </div>
  );
}

export default App;
