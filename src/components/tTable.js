import React from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const TtTable = () => (
  <Paper zDepth={1} style={{padding:'1em'}}>
  <h4>New tickets</h4>
    <Table>
       <TableHeader>
         <TableRow>
           <TableHeaderColumn>Username</TableHeaderColumn>
           <TableHeaderColumn>Phone #</TableHeaderColumn>
           <TableHeaderColumn>Ticket subject</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody>
         <TableRow>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>403-898-1292</TableRowColumn>
           <TableRowColumn>My internet connection is not working</TableRowColumn>
           <TableRowColumn>4:01</TableRowColumn>
           <TableRowColumn><FlatButton label="Respond" /></TableRowColumn>
         </TableRow>
         <TableRow>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>403-898-1292</TableRowColumn>
           <TableRowColumn>My internet connection is not working</TableRowColumn>
           <TableRowColumn>4:01</TableRowColumn>
           <TableRowColumn><FlatButton label="Respond" /></TableRowColumn>
         </TableRow>
         <TableRow>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>403-898-1292</TableRowColumn>
           <TableRowColumn>My internet connection is not working</TableRowColumn>
           <TableRowColumn>4:01</TableRowColumn>
           <TableRowColumn><FlatButton label="Respond" /></TableRowColumn>
         </TableRow>
         <TableRow>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>403-898-1292</TableRowColumn>
           <TableRowColumn>My internet connection is not working</TableRowColumn>
           <TableRowColumn>4:01</TableRowColumn>
           <TableRowColumn><FlatButton label="Respond" /></TableRowColumn>
         </TableRow>
         <TableRow>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>403-898-1292</TableRowColumn>
           <TableRowColumn>My internet connection is not working</TableRowColumn>
           <TableRowColumn>4:01</TableRowColumn>
           <TableRowColumn><FlatButton label="Respond" /></TableRowColumn>
         </TableRow>
       </TableBody>
     </Table>
  </Paper>
);

export default TtTable;
