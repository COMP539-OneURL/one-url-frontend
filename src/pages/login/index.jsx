import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
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
        <div style={{ display: 'flex', width: '100%', height: '80%', justifyContent: 'center'}}>
          <div style={{ margin: 'auto', background: 'white', borderRadius: '0.5rem', width: '50%' }}>
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
                <div style={{ paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                  Do not have an account? <Link to="/signup"><span style={{ color: '#1877F2' }}>Sign up</span></Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Form.Item 
                    wrapperCol={{ offset: 0 }}
                  >
                    <Button type="primary" htmlType="submit">
                      Log In
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
    </Layout>
  )
}

export default Login;