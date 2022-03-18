import React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import { Form, Input, Row, Col, Button, Typography, Carousel } from "antd";
import { CopyOutlined, CheckOutlined, FacebookOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Item } = Form;
const { Title, Paragraph } = Typography;

const ShortenUrl = () => {
  const [result, setResult] = useState("https://oneurl.com/3tsasweds");
  const [ifCopy, setIfCopy] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(result);
    setIfCopy(true);
  };

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onfinish = () => {};
  return (
    <Layout>
      <Form onfinish={onfinish}>
        <Row style={{ marginTop: "180px" }}>
          <Col span={11} offset={6}>
            <Item name='origin-url' rules={[{ required: true, message: "Please input your url!" }]}>
              <Input.Group>
                <Input
                  style={{ width: "88%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
                  size='large'
                />
                <Button
                  type='primary'
                  htmlType='submit'
                  size='large'
                  style={{
                    backgroundColor: "#8c8c8c",
                    borderColor: "#8c8c8c",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    color: "white",
                  }}
                >
                  shorten
                </Button>
              </Input.Group>
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={6}>
            <Title level={3}>Customize Link Domain</Title>
          </Col>
        </Row>
        <Row>
          <Col span={5} offset={6}>
            <Item name='customize-Link-Domain'>
              <Input style={{ borderRadius: "10px" }} size='large' />
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={5} offset={6} style={{ backgroundColor: "grey", paddingLeft: "10px" }}>
            <Row align='middle' style={{ height: "50px", color: "white", fontSize: "20px" }}>
              {result}
            </Row>
          </Col>
          <Col span={2}>
            <Col span={22} offset={2} style={{ backgroundColor: "grey", paddingLeft: "10px" }}>
              <Row align='middle' justify='center' style={{ height: "50px" }}>
                <Link to='#' onClick={copy} style={{ color: "white", fontSize: "20px" }}>
                  {ifCopy ? <CheckOutlined /> : <CopyOutlined />} Copy
                </Link>
              </Row>
            </Col>
          </Col>
          <Col span={4}>
            <Col span={23} offset={1} style={{ backgroundColor: "grey", paddingLeft: "10px" }}>
              <Row align='middle' style={{ height: "50px" }}>
                <Col span={4} offset={2}>
                  <Row style={{ color: "white", fontSize: "20px" }}>shared</Row>
                </Col>
                <Col span={4} offset={4}>
                  <Link to='#' onClick={copy} style={{ color: "white", fontSize: "30px" }}>
                    <FacebookOutlined />
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='#' onClick={copy} style={{ color: "white", fontSize: "30px" }}>
                    <LinkedinOutlined />
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='#' onClick={copy} style={{ color: "white", fontSize: "30px" }}>
                    <MailOutlined />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Row style={{marginTop:"20px"}}>
          <Col span={11} offset={6}>
            <Carousel>
              <div>
                <h3 style={contentStyle}>ad1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>ad2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>ad3</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ShortenUrl;
