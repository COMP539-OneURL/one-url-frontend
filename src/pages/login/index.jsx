import React from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import Layout from "../../components/layout";
import { Link } from "react-router-dom";

const Login = () => {
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
        <Row style={{marginTop:"15vh"}}>
          <Col span={10} offset={7} style={{ margin: 'auto', background: 'white', borderRadius: '0.5rem', width: '50%' }}>
            <Form
              name="basic"
              // labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div style={{ width: '80%', margin: 'auto', paddingTop: '40px', paddingBottom: '40px'}}>
                <div style={{ paddingLeft: '4rem'}}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                </div>
                <Row justify="center" style={{ paddingTop: '20px', paddingBottom: '20px'}}>
                  <Col>Do not have an account? <Link to="/signup"><span style={{ color: '#1877F2'}}>Sign up</span></Link></Col>
                </Row>

                <Row justify="center" style={{ paddingTop: '20px', paddingBottom: '20px'}}>
                <Form.Item 
                  wrapperCol={{ offset: 0 }}
                >
                  <Button type="primary" htmlType="submit">
                    Log In
                  </Button>
                </Form.Item>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>
    </Layout>
  )
}

export default Login;