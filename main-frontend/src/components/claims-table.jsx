
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(claimID, insuranceID, insuranceType, date, amount, status, edit) {
  return { claimID, insuranceID, insuranceType, date, amount, status, edit };
}

const rows = [
    createData(2010, 1009, 'Health', '2019-01-01', 100.00, 'Approved', 'edit')
];

export default function ClaimsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Claim ID</TableCell>
            <TableCell>Insurance ID</TableCell>
            <TableCell>Insurance Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.claimID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.claimID}
              </TableCell>
              <TableCell>{row.insuranceID}</TableCell>
              <TableCell>{row.insuranceType}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.edit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

