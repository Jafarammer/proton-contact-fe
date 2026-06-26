import React from "react";
import { Typography, Card, Flex, Form, Input, Button, Divider } from "antd";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
type FieldType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  return (
    <div className="register-container">
      <div className="logo">
        <BiSolidUserRectangle className="icon" />
      </div>
      <Title level={3} className="title">
        Proton Contact
      </Title>
      <Text type="secondary">Efficiency. Reliabillity. Precision.</Text>
      <div>
        <Card className="card">
          <Flex vertical align="flex-start">
            <Title level={4} className="title">
              Create an account
            </Title>
            <Text type="secondary">
              Manage your profesional network with calm control.
            </Text>
          </Flex>
          <Form
            layout="vertical"
            name="formRegister"
            autoComplete="off"
            className="form"
          >
            <Form.Item<FieldType>
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Full Name is required!" }]}
              required={false}
            >
              <Input
                size="large"
                name="fullName"
                type="text"
                autoComplete="off"
                prefix={<FaUser size={16} />}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Email is required!" }]}
              required={false}
            >
              <Input
                size="large"
                name="email"
                type="email"
                autoComplete="off"
                prefix={<IoMail size={16} />}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required!" }]}
              required={false}
            >
              <Input.Password
                size="large"
                name="password"
                autoComplete="off"
                prefix={<FaLock size={16} />}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("The passwords do not match!"),
                    );
                  },
                }),
              ]}
              required={false}
            >
              <Input.Password
                size="large"
                name="confirmPassword"
                autoComplete="off"
                prefix={<IoShieldCheckmark size={16} />}
              />
            </Form.Item>

            <Button
              htmlType="submit"
              block
              type="primary"
              size="large"
              className="btn-register"
            >
              Register
            </Button>
          </Form>
        </Card>
        <Divider />
      </div>
      <Text type="secondary">
        Already have an account ? <Link to={"/"}>Log in</Link>
      </Text>
    </div>
  );
};

export default Register;
