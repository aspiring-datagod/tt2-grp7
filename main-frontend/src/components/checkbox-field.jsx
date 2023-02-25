import { Checkbox, Form} from 'antd';

function CheckboxField({name, label, rules=[]}) {
  return (
      <Form.Item label={label} name={name} style={{ color: "white" }} rules={rules}>
          <Checkbox />
      </Form.Item>
  );
}

export default CheckboxField;