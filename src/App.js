import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HeaderBar from './pages/header';
import ContentPage from './pages/content';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import FooterPage from './pages/footer';

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        {/* <HeaderBar />
        <ContentPage />
        <FooterPage /> */}
      {/* </Layout> */}
    </div>
  );
}

export default App;
