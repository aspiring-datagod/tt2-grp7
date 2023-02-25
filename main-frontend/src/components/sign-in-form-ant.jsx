import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginApi from '../api/login.api';

const SignInForm = (props) => {

  const navigate = useNavigate()

  const onFinish = async (values) => {

    const postRequest = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }

    const response = await LoginApi.login(postRequest)
    const token = response.token;
    localStorage.setItem("accessToken", token);
    if (token) {
      navigate("home")
    }
  };



  return (<div style={{ marginTop: 20 }}>

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
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'Invalid Email Format' },
          { min: 5, message: 'Min 5 chars required' },
        ]}
      >
        <Input placeholder='Enter your username' />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { min: 5, message: 'Min 5 chars required' }
        ]}
      >
        <Input.Password placeholder='Enter your password' />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <div >
          <Button style={{ marginTop: 12, height: 40, width: "100%", backgroundColor: "#212121" }} type="primary" htmlType="submit">
            Sign in
          </Button>
        </div>

      </Form.Item>
    </Form>


  </div >)
};
export default SignInForm;