import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import RegisterAPI from '../api/register.api';
import UserApi from '../api/user.api';

const SignUpForm = (props) => {



    const onFinish = async (values) => {

        const postRequest = {
            email: values.Email,
            password: values.password
        }
        const data = await RegisterAPI.register(postRequest)

    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ marginTop: 20 }}>

            <Form
                name="basic"

                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                layout="vertical"
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { min: 5, message: 'min 5 chars pls' },
                    ]}
                >
                    <Input placeholder='Enter your username' />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { type: 'email', message: 'Invalid Email format' },
                        { min: 5, message: 'Min 5 chars required' },
                    ]}
                >
                    <Input placeholder='Enter your email' />
                </Form.Item>



                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 5, message: 'min 5 chars pls' },
                    ]}
                >
                    <Input.Password placeholder='Enter your password' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Button style={{marginTop: 12, height: 40, width: "100%", backgroundColor: "#212121" }} type="primary" htmlType="submit">
                        Sign Up
                    </Button>

                </Form.Item>
            </Form>


        </div >)
};
export default SignUpForm;