import { DatePicker, Form} from 'antd';

function DatePickerField({name, label, rules=[]}) {
  return (
      <Form.Item label={label} name={name} style={{ color: "white" }} rules={rules}>
          <DatePicker /> 
      </Form.Item>
  );
}

export default DatePickerField;