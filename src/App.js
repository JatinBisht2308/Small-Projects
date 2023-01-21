import './App.css';
import  Navbar from './components/navbar/Navbar';
import  About from './components/about/About';
import  Service from './components/services/Services';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <About />
     <Service />
    </div>
  );
}

export default App;
