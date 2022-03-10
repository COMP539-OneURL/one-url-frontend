import React from "react";
import { Form, Input, Button } from "antd";
import Layout from "../components/layout";
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
      <div style={{ display: "flex", width: "100%", height: "80%", justifyContent: "center" }}>
        <div style={{ margin: "auto", background: "white", borderRadius: "0.5rem", width: "50%" }}>
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
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                Already have an account?{" "}
                <Link to='/login'>
                  <span style={{ color: "#1877F2" }}>Log In</span>
                </Link>
              </div>

              <Form.Item wrapperCol={{ offset: 0 }}>
                <Button type='primary' htmlType='submit'>
                  Sign Up
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
