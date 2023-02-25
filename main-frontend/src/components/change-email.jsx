import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import EmailAPI from '../api/emailchange.api';


const ChangeEmail = (props) => {

    const onFinish = async (values) => {

        const patchRequest = {
            oilemail: values.oldemail,
            newemail: values.newemail
        }
        console.log(patchRequest)
        
        const data = await EmailAPI.emailchange(patchRequest)

    };


    return (<div style={{ marginTop: 20 }}>
        <h1 style={{ fontSize: "1.4em", fontWeight: "600", marginBottom: 40 }}>Change Email</h1>
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
                label="Current Email"
                name="oldemail"
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
                label="New Email"
                name="newemail"
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
                label="Confirm Email"
                name="confirmemail"
                style={{ color: "white" }}
                rules={[
                    { required: true, message: 'Please input your Email!' },
                    { type: 'email', message: 'Invalid Email Format' },
                    { min: 5, message: 'Min 5 chars required' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('newemail') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two Emails that you entered do not match!'));
                        },
                      }),
                    
                ]}
            >
                <Input placeholder='Enter your username' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 24,
                }}
            >
                <div >
                    <Button style={{ marginTop: 12, height: 40, backgroundColor: "#212121" }} type="primary" htmlType="submit">
                        Change Email
                    </Button>
                </div>
            </Form.Item>
        </Form>


    </div >)
};
export default ChangeEmail;