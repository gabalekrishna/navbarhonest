
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import Home2 from './pages/Home2';
import Navbar from './pages/Navbar';



function App() {
  
  return (
    <div>
      <Navbar />
      <div className='contain'>
      <Home2/>
      <HeroSection/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
