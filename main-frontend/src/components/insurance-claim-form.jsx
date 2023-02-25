import React from 'react';
import { Row, Col, Button, Checkbox, Form, Input, Select, Space } from 'antd';
import { Box, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import Selectbutton from './selectfield';
import CheckboxField from './checkbox-field.jsx';
import DatePickerField from './date-picker-field.jsx';

function InsuranceClaimForm({ formOnFinish, onSubmit, initialValues={}, open, onClose, isEdit=false }) {
    const { TextArea } = Input;
    const [form] = Form.useForm();

    function renderTextField(name, label, rules) {
        return (
            <Form.Item
                label={label}
                name={name}
                style={{ color: "white" }}
                rules={rules}
            >
                <Input placeholder={label} />
            </Form.Item>
        );
    }
      
    function renderSelectField(name, label, rules, values) {
        return (
            <Selectbutton name={name} label={label} rules={rules} options={values} />
        );
    }

    return (
        <Form
            name="insurance-claim-form"
            labelCol={{ span: 12 }}
        
            initialValues={{
                remember: true,
                ...initialValues,
            }}
            onFinish={onSubmit}
            // layout="vertical"
            autoComplete="off"
        >
            {renderTextField('firstName', 'First Name', [{ required: true, message: 'Input your first name!' }])}
            {renderTextField('lastName', 'Last Name', [{ required: true, message: 'Input your Last Name!' }])}
            {renderSelectField('insurancePolicy', 'Insurance Policy', [{ required: true, message: 'Select Insurance Policy'}], [{id: 'ID', val: 'VAL'}])}
            <DatePickerField name="expenseDate" label="Expense Date" rules={[{ required: true, message: 'Select Expense Date'}]} />
            {renderTextField('purpose', 'Purpose', [{ required: true, message: 'Input claim purpose!' }])}
            {renderTextField('amount', 'Amount', [{ required: true, message: 'Input claim amount!' }, {type: 'number', message: "Enter a number"}])}
            <CheckboxField name="followup" label="Followup" />
            {renderSelectField('previousClaim', 'Previous Claim ID', [{ required: false, message: 'Select previous claim id' }], [{id: 'ID', val: 'VAL'}])}
        <Form.Item
            wrapperCol={{
            span: 24,
            }}
        >
            <div >
                <Button style={{ marginTop: 12, height: 40, width: "100%", backgroundColor: "#212121" }} type="primary" htmlType="submit">
                    Submit Claims
                </Button>
            </div>
        </Form.Item>
        </Form>
    );
}

export default InsuranceClaimForm;