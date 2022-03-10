import React from "react";
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from './signup';
import Home from './home';


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
