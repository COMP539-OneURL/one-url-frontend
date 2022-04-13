import React from "react";
import Layout from "../../components/layout";
import { Form, Row, Col, Button, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Business = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <Row style={{ marginTop: "11vh" }}>
        <Col offset={6} span={5}>
          <Title level={1} style={{ color: "white" }}>
            {" "}
            Grow your Business with OneURL
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={6} span={5}>
          <Row style={{ marginTop: "2vh" }}>
            <Title level={4} style={{ color: "white" }}>
              {" "}
              Powerful Ads can truly grow your company's market
            </Title>
          </Row>
        </Col>
        <Col offset={1} span={12}>
          <Row>
            <Col offset={2}>
              <Title level={2} style={{ color: "white" }}>
                The results you can get
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Title level={2} style={{ color: "white" }}>
                <CheckCircleOutlined />
              </Title>
            </Col>
            <Col>
              <Title level={2}>Increased Website Visits</Title>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Title level={2} style={{ color: "white" }}>
                <CheckCircleOutlined />
              </Title>
            </Col>
            <Col>
              <Title level={2}>Precision Marketing</Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col offset={6} span={5}>
          <Button type='primary' size='large' style={{ borderRadius: "10px" }} onClick={(e) => navigate("/shortenUrl")}>
            Start Now
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Business;
