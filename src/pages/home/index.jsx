import React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import { Form, Input, Row, Col, Button, Typography, Carousel } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;

const Home = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <Row style={{ marginTop: "11vh" }}>
        <Col offset={9}>
          <Title level={1} style={{ color: "white" }}>
            Welcome to OneURL
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={9}>
          <Title level={4} style={{ color: "white" }}>
            A URL shortener helps you to grow your brand
          </Title>
        </Col>
      </Row>
      <Row style={{ marginTop: "5vh" }}>
        <Col offset={9} span={5}>
          <Button type='primary' size='large' style={{ borderRadius: "10px" }} onClick={(e) => navigate("/shortenUrl")}>
            Get Started for Free
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
