import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
