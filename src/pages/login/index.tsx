import React from "react";
import type { FormProps } from "antd";
import { Typography, Card, Form, Input, Button, Divider } from "antd";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <BiSolidUserRectangle className="icon" />
      </div>
      <Title level={3} className="title">
        Proton Contact
      </Title>
      <Text type="secondary">Scure precision for modern profesionals.</Text>
      <div>
        <Card className="card">
          <Form layout="vertical" name="formLogin" autoComplete="off">
            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              required={false}
            >
              <Input
                size="large"
                type="email"
                name="email"
                prefix={<IoMail size={16} />}
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              required={false}
            >
              <Input.Password
                name="password"
                size="large"
                prefix={<FaLock size={16} />}
                autoComplete="off"
              />
            </Form.Item>

            <Link to="/forgot-password" className="link">
              Forgot Password?
            </Link>

            <Button
              htmlType="submit"
              block
              type="primary"
              size="large"
              icon={<FaArrowRightToBracket size={16} aria-label="icon-arrow" />}
              iconPosition="end"
            >
              Sign In to Dashboard
            </Button>
          </Form>
        </Card>
        <Divider />
      </div>
      <Text type="secondary">
        New to Proton Contact ? <Link to={"/register"}>Create an account</Link>
      </Text>
    </div>
  );
};

export default Login;
