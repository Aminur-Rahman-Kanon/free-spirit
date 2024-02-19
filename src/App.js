import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Contact from './pages/contact/contact';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
