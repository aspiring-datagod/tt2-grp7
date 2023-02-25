import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { Box, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';

function InsuranceClaimForm({ onSubmit, initialValues={}, open, onClose, isEdit=false }) {

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
            <Form.Item label={label} name={name} style={{ color: "white" }} rules={rules}>
                <Select options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}>
                </Select>
            </Form.Item>
        );
    }

    function renderCheckboxField(name, label, rules) {
        return (
            <Form.Item label={label} name={name} style={{ color: "white" }} rules={rules}>
                <Checkbox />
            </Form.Item>
        );
    }

    function renderForm() {
        return (
            <div style={{ marginTop: 20 }}>

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
                    {renderTextField('firstName', 'First Name', [{ required: true, message: 'Input your First Name!' }])}
                    {renderTextField('lastName', 'Last Name', [{ required: true, message: 'Input your Last Name!' }])}
                    {renderSelectField('insurancePolicy', 'Insurance Policy', [{ required: true, message: 'Select Insurance Policy'}], [{id: 'ID', val: 'VAL'}])}
                    {renderTextField('purpose', 'Purpose', [{ required: true, message: 'Input claim purpose!' }])}
                    {renderTextField('amount', 'Amount', [{ required: true, message: 'Input claim amount!' }])}
                    {renderCheckboxField('followup', 'Followup', [])}
                    {renderSelectField('previousClaim', 'Previous Claim ID', [{ required: true, message: 'Select Insurance Policy' }], [{id: 'ID', val: 'VAL'}])}
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
            </div >
        );
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xl">
            <DialogTitle>Add New Claim</DialogTitle>
            <DialogContent>
                {renderForm()}
            </DialogContent>
        </Dialog>
    );
}

// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { Box, Button, Checkbox, Dialog, DialogActions, DialogTitle, DialogContent, Grid, FormControl, InputLabel, MenuItem, TextField, Select } from '@mui/material';
// import DateTimePicker from '@mui/lab/DateTimePicker';

// function InsuranceClaimForm({ onSubmit, currValues={}, open, onClose }) {
//     const initialValues = {
//         first_name: "",
//         last_name: "",
//         insurance_id: 0,
//         expense_date: new Date(),
//         purpose: '',
//         amount: 0,
//         follow_up: 0,
//         previous_claim: 0
//     };

//     const claimYupSchema = yup.object().shape({
//         first_name: yup.string()
//             .min(1, 'Too Short')
//             .required('First Name is required'),
//         last_name: yup.string()
//             .min(1, 'Too Short')
//             .required('Last Name is required'),
//         insurance_id: yup.number("Insurance ID is a number")
//             .required('Insurance ID is required'),
//         expense_date: yup.date()
//             .required('Expense Date is required'),
//         category: yup.string()
//             .required('Category is required'),
//         purpose: yup.string()
//             .min(1, 'Too Short')
//             .max(256, 'Maximum 256 characters')
//             .notRequired()
//             .nullable(),
//         amount: yup.number()
//             .required('Insurance ID is required'),
//         follow_up: yup.number()
//             .required('Follow Up is required'),
//         previous_claim: yup.number()
//             .notRequired(),
//     });

//     const formik = useFormik({
//         initialValues: Object.keys(currValues).length > 0 ? currValues : initialValues,
//         validationSchema: claimYupSchema,
//         onSubmit: async values => {
//             console.log('submitInsuranceClaim', values);
//             await onSubmit(values);
//         },
//     }); 

//     const renderErrorMsg = id => {
//         return formik.errors[id] && (
//             <div style={{ color: "red" }}>{formik.errors[id]}</div> 
//         );
//     };

//     const renderCheckboxField = (id, label) => {
//         return (
//             <Checkbox label={label}  name={id} id={id} />
//         );
//     };

//     const renderTextField = (id, label, minRows=1, type="string", required=true) => {
//         return (
//             <Grid item xs={12}>
//                 <TextField
//                     margin="normal"
//                     required={required}
//                     type={type}
//                     fullWidth
//                     multiline={minRows > 1}
//                     minRows={minRows}
//                     id={id}
//                     label={label}
//                     name={id}
//                     autoComplete={id}
//                     autoFocus
//                     onChange={formik.handleChange}
//                     value={formik.values[id]}
//                 />
//                 {renderErrorMsg(id)}
//             </Grid>
//         );
//     };

//     const renderDateTimeField = (id, label) => {
//         return (
//             <Grid item xs={12}>
//                 <DateTimePicker
//                     renderInput={(props) => <TextField {...props} />}
//                     required
//                     id={id}
//                     name={id}
//                     label={label}
//                     value={formik.values[id]}
//                     onChange={val => {
//                         formik.setFieldValue(id, val);
//                     }}
//                     minutesStep={5}
//                 />
//                 {renderErrorMsg(id)}
//             </Grid>
//         );
//     };

//     function renderForm() {
//         return (
//             // <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
//                 <Grid container spacing={1}>
//                     {renderTextField("first_name", "First Name")}
//                     {renderTextField("last_name", "Last Name")}
//                     {renderTextField("insurance_id", "Insurance ID")}
//                     {renderDateTimeField("expense_date", "Expense Date")}
//                     {renderTextField("purpose", "Purpose")}
//                     {renderTextField("amount", "Amount")}
//                     {renderCheckboxField("follow_up", "Follow Up")}
//                     {renderTextField("previous_claim", "Previous Claim ID")}
//                     {/* <Grid item xs={12}>
//                         <Button type="submit">Submit</Button>
//                     </Grid> */}
//                 </Grid>
//             // </Box>
//         );    
//     }

//     return (
//         <Dialog open={open} onClose={onClose} maxWidth="md">
//             <DialogTitle>Add New Claim</DialogTitle>
//             <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
//                 <DialogContent>
//                     {renderForm()}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button type="submit" onClick={formik.handleSubmit}>Submit</Button>
//                 </DialogActions>
//             </Box>
//         </Dialog>
//     );
// }

export default InsuranceClaimForm;