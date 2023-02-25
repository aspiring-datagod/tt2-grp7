import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SignInForm = (props) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    axios
      .post(`http://localhost:4000/api/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response.statusText);
        if (response.statusText !== "OK") {
          throw new Error("Email or Password is incorrect, please try again.");
        } else {
          console.log(response.data.profile_done);
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      })
      .catch((error) => {
        console.error(
          "There was a problem sending the data to the server:",
          error
        );
      });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          style={{ color: "white" }}
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Invalid Email Format" },
            { min: 5, message: "Min 5 chars required" },
          ]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 5, message: "Min 5 chars required" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <div>
            <Button
              style={{
                marginTop: 12,
                height: 40,
                width: "100%",
                backgroundColor: "#212121",
              }}
              type="primary"
              htmlType="submit"
            >
              Sign in
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignInForm;
