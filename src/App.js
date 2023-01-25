import './App.css';
import  Navbar from './components/navbar/Navbar';
import  About from './components/about/About';
import  Service from './components/services/Services';
import Healthcare from './components/healthcare/Healthcare';
import MobileApp from './components/mobileApp/MobileApp';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <About />
     <Service />
     <Healthcare />
     <MobileApp />
     <Testimonial />
    </div>
  );
}

export default App;
