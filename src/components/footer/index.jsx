import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterPage = () => {
  return (
    <>
      <Footer style={{ textAlign: "center", position: "fixed", bottom: "0", width: "100%" }}>
        Shorten URL ©2022 Created By Shorten URL Team
      </Footer>
    </>
  );
};

export default FooterPage;
