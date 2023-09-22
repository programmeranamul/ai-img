import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<ServicePage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/team" element={<TeamPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
