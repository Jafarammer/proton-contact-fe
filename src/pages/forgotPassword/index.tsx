import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, Flex, Form, Input, Button } from "antd";
import { BiSolidUserRectangle } from "react-icons/bi";
import { IoMail, IoSend, IoArrowBack } from "react-icons/io5";

const { Title, Text } = Typography;
type FieldType = {
  email?: string;
};

const ForgotPassword = () => {
  // router
  const navigate = useNavigate();
  return (
    <div className="forgot-password-container">
      <div className="logo">
        <BiSolidUserRectangle className="icon" />
      </div>
      <Title level={3} className="title">
        Proton Contact
      </Title>
      <div>
        <Card className="card">
          <Flex vertical align="flex-start">
            <Title level={4} className="title">
              Forgot Password ?
            </Title>
            <Text type="secondary">
              Enter your email address and we will send you instructions to
              reset your password.
            </Text>
          </Flex>

          <Form
            layout="vertical"
            name="form-forgot-password"
            autoComplete="off"
            className="form"
          >
            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
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

            <Button
              htmlType="submit"
              block
              type="primary"
              size="large"
              icon={<IoSend size={16} aria-label="icon-send" />}
              iconPosition="end"
            >
              Send Intructions
            </Button>
          </Form>
        </Card>
        <Button
          variant="text"
          size="large"
          block
          color="primary"
          icon={<IoArrowBack size={16} />}
          iconPosition="start"
          onClick={() => navigate("/")}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
