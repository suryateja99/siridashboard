import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function DatTable(props) {
  const classes = useStyles();
  return (
    <Table >
      <TableHead>
        <TableRow>
          <TableCell>No of Cases</TableCell>
          <TableCell>Cases passed</TableCell>
          <TableCell>Cases failed</TableCell>
          <TableCell>Reason</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
       
        {props.data.map(row => (
          <TableRow key={row.name}>
            
            <TableCell >{row.noofcases}</TableCell>
            <TableCell >{row.casespassed}</TableCell>
            <TableCell >{row.casesfailed}</TableCell>
            <TableCell >{row.reason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}