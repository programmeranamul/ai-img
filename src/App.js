import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<ServicePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
