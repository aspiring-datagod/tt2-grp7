import {useState } from 'react';
import { Row, Col, Form, Input, Select, Radio, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./insurance-claim-page.css";
import { InfoCircleOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import InsuranceClaimForm from "../../components/insurance-claim-form";


const InsuranceClaimPage = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const [initialValues, setInitialValues] = useState({name: "hhhh"});

    useEffect(() => {
      const claimId = window.location.pathname.substring(8);
      setInitialValues(initialValues)

    }, []);

    const formOnFinish = (formValues) => {
      
        console.log(form.getFieldsValue())
    }

     const submitInsuranceClaim = async (values) => {
    //   const postRequest = {
    //     full: values.Email,
    //     password: values.password
    // }
      // const data = await RegisterAPI.register(values)
      console.log('-- submitInsuranceClaim', values);
      navigate("/home");
    }

    return (
      <div className="background">
        <div className="form-card">
          <InsuranceClaimForm onSubmit={submitInsuranceClaim} initialValues={initialValues} />
        </div>
      </div>
    );

    // return (<div className="background">
    //     { <div className="form-card">
    //         <div className="form-card-header-section">
    //             <h1>Enterprise Form</h1>
    //         </div>
    //         <Form
    //             onFinish={(formValues) => formOnFinish(formValues)}
    //             form={form}
    //             layout="vertical">
    //             <Row gutter={[16]}>
    //                 <Col sm={24} md={12}>
    //                     <Form.Item
    //                         label="Full Name"
    //                         name="fullName"
    //                         rules={[{ required: true, message: 'Full name is compulsory hor!!' }]}
    //                         tooltip={{ title: 'Your NRIC Name', icon: <InfoCircleOutlined /> }}
    //                     >
    //                         <Input placeholder="Enter your full name" />
    //                     </Form.Item>
    //                 </Col>

    //                 <Col sm={24} md={12}>
    //                     <Form.Item
    //                         name="emailAddress"
    //                         label="Email Address"
    //                         rules={[
    //                             { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Email Format pls' },
    //                             { required: true, message: 'Email addr pls' },
    //                             { min: 5, message: 'min 5 chars pls' },
    //                             { max: 20, message: 'min 20 chars pls' },
    //                         ]}
    //                         tooltip={{ title: 'Your NRIC Name', icon: <InfoCircleOutlined /> }}
    //                     >
    //                         <Input placeholder="Enter your email address" />
    //                     </Form.Item>
    //                 </Col>

    //                 <Col sm={24} md={12}>
    //                     <Form.Item
    //                         name="girlfriendName"
    //                         label="Your Girlfriends Name">
    //                         <Select
    //                             placeholder="Choose your girlfriend's name"
    //                             options={[
    //                                 { value: 'jack', label: 'Jack' },
    //                                 { value: 'lucy', label: 'Lucy' },
    //                                 { value: 'Yiminghe', label: 'yiminghe' },
    //                             ]}
    //                         />
    //                     </Form.Item>
    //                 </Col>

    //                 <Col sm={24} md={12}>
    //                     <Form.Item
    //                         name="age"
    //                         label="Age"
    //                     >
    //                         <Select
    //                             placeholder="Choose your girlfriend's age"
    //                             options={[
    //                                 { value: '1', label: '1' },
    //                                 { value: '2', label: '2' },
    //                                 { value: '3', label: '3' },
    //                                 { value: '4', label: '4' },
    //                             ]}
    //                         />
    //                     </Form.Item>
    //                 </Col>

    //                 <Col sm={24}>
    //                     <Form.Item
    //                         name="myPreference"
    //                         label={"My Preference"}>
    //                         <Radio.Group>
    //                             <Space direction="vertical">
    //                                 <Radio value={1}>Option A</Radio>
    //                                 <Radio value={2}>Option B</Radio>
    //                                 <Radio value={3}>Option C</Radio>
    //                             </Space>
    //                         </Radio.Group>
    //                     </Form.Item>
    //                 </Col>

    //                 <Col sm={24}>
    //                     <Form.Item
    //                         name="comment"
    //                         label={"Comments"}>
    //                         <TextArea rows={4} placeholder="Enter your full name" />
    //                     </Form.Item>
    //                 </Col>
    //                 <Form.Item>
    //                     <Button type="primary" htmlType="submit">
    //                         Submit
    //                     </Button>
    //                 </Form.Item>
    //             </Row>
    //         </Form>
    //     </div> }
    // </div>)
};
export default InsuranceClaimPage;