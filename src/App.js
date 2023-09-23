import { useState, useEffect, createContext } from "react";
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
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';
import SingUp from './pages/Signup';
import SingIn from './pages/SignIn';
import CreateBlog from './pages/CreateBlog';
import PrivetRoute from "./components/PrivetRoute";
import ManageBlog from "./pages/ManageBlog";

export const AuthContext = createContext();

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicePage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/team" element={<TeamPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin/singup" element={<SingUp />}></Route>
          <Route path="/admin/singin" element={<SingIn />}></Route>

          <Route element={<PrivetRoute />}>
            <Route path="/admin/create-blog" element={<CreateBlog />}></Route>
            <Route path="/admin/manage-blog" element={<ManageBlog />}></Route>
          </Route>


        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
