import { Select, Form } from 'antd';
// [
//   { value: 'jack', label: 'Jack' },
//   { value: 'lucy', label: 'Lucy' },
//   { value: 'Yiminghe', label: 'yiminghe' },
// ]
const Selectbutton = ({name, label, rules=[], options=[] }) => (
    <Form.Item label={label} name={name} style={{ color: "white" }} rules={rules}>
        <Select
            placeholder={label}
            options={options}
        />
    </Form.Item>
);
export default Selectbutton;