import React from "react";
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from './signup';
import Home from './home';
import ShortenUrl from "./shortenUrl";
import {Provider} from "react-redux";
import { createStore } from 'redux'
import rootReducer from '../reducers'
import Business from "./business";

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
