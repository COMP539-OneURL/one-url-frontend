import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Layout from "../../components/layout";
import { Link } from "react-router-dom";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Row style={{ marginTop: "10vh" }}>
        <Col span={10} offset={7} style={{ margin: "auto", background: "white", borderRadius: "0.5rem", width: "50%" }}>
          <Form
            name='basic'
            // labelCol={{ span: 8 }}
            layout='vertical'
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row justify='middle'>
              <div style={{ width: "80%", margin: "auto", paddingTop: "40px", paddingBottom: "40px" }}>
                <div style={{ paddingLeft: "8rem" }}>
                  <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: "Please input your username!" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label='Confirmed Password'
                    name='password'
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password />
                  </Form.Item>
                </div>
                <Row justify='center' style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  Already have an account?{" "}
                  <Link to='/login'>
                    <span style={{ color: "#1877F2" }}>Log In</span>
                  </Link>
                </Row>
                <Row justify='center' style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button type='primary' htmlType='submit'>
                      Sign Up
                    </Button>
                  </Form.Item>
                </Row>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
