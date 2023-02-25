import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Claim ID',
    dataIndex: 'claimid',
    key: 'claimid',
    render: (text) => <a>{text}</a>,
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
        <a>Edit</a>
        <a>Delete</a>
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
