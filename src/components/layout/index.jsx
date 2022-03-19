import React from "react";
import { Layout as AntdLayout } from "antd";
import HeaderBar from "../headerbar";
import FooterPage from "../footer";

const { Content } = AntdLayout;

const Layout = ({ children, style }) => {
  return (
    <AntdLayout style={{ background: "#47C0B9" }}>
      <HeaderBar />
      <Content className='site-layout'>
        {children}
      </Content>
      <FooterPage />
    </AntdLayout>
  );
};

export default Layout;
