import { Space, Table, Button } from 'antd';
import RegisterAPI from '../api/register.api';



const onTrigger = async (values) => {

    const postRequest = {
        title: values.Email,
        password: values.password
    }
    const data = await RegisterAPI.register(postRequest)

};



const columns = [
  {
    title: 'Claim ID',
    dataIndex: 'claimid',
    key: 'claimid',
  },
  {
    title: 'Insurance ID',
    dataIndex: 'insuranceid',
    key: 'insuranceid',
  },
  {
    title: 'Insurance Type',
    dataIndex: 'insurancetype',
    key: 'insurancetype',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount'
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={event =>  window.location.href='/extra-page'}>View/Edit</Button>
        <Button>Delete</Button>
      </Space>
    ),
  },
];


const data = [
  {
    key: 2010,
    claimid: 2010,
    insuranceid: 1629,
    insurancetype: "Health",
    date: "2019-01-01",
    amount: 2000,
    status: "Approved",
  },
  {
    key: 2012,
    claimid: 2012,
    insuranceid: 1629,
    insurancetype: "Health",
    date: "2019-03-01",
    amount: 5000,
    status: "Pending",
  },
  {
    key: 2023,
    claimid: 2023,
    insuranceid: 1782,
    insurancetype: "Car",
    date: "2020-01-01",
    amount: 15000,
    status: "Rejected",
  },
];


const ClaimsTestTable = () => <Table columns={columns} dataSource={data} />;
export default ClaimsTestTable;
