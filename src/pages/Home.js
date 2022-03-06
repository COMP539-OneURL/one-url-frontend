import React from "react";
import { Layout } from 'antd';
import HeaderBar from './header';
import ContentPage from './content';
import FooterPage from './footer';

const HomePage = () => {
  return (
    <>
      <HeaderBar />
      <ContentPage />
      <FooterPage />
    </>
  )
}

export default HomePage;