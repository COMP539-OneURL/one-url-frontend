import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

const contentPage = () => {
  return (
    <>
      <Content className="site-layout">
        <div className="site-layout-background" style={{ padding: 24}}>
          Content
        </div>
      </Content>
    </>
  )
}

export default contentPage;