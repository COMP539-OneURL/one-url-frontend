import React from "react";
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from './signup';
import Home from './home';
import ShortenUrl from "./shortenUrl";
import Business from "./business";


function App() {
  return (
    <div className="App">
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="shortenUrl" element={<ShortenUrl />} />
          <Route path="business" element={<Business />} />
        </Routes>
        {/* <HeaderBar />
        <ContentPage />
        <FooterPage /> */}
      {/* </Layout> */}
    </div>
  );
}

export default App;
