import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TtTicketAppBar from './tTicketAppBar';
import TtList from './tList';
import TtTable from './tTable';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const TtView = () => (
  <div style={{padding:'0', margin:'0'}}>
    <TtTicketAppBar />
    <div style={{backgroundColor:'#373737', color:'white', padding: '1em', marginBottom: '1em'}}>
    <Grid fluid>
      <Row>
        <Col xs={2} md={2}>
          <span style={{color:'white', fontSize:'12px', marginTop:'1em'}}>Name</span>
          <p  style={{marginTop:'.3em'}}>LeBron James</p>
        </Col>
        <Col xs={2} md={2}>
          <span style={{color:'white', fontSize:'12px', marginTop:'1em'}}>Email</span>
          <p  style={{marginTop:'.3em'}}>leb@james.com</p>
        </Col>
        <Col xs={2} md={2}>
          <span style={{color:'white', fontSize:'12px', marginTop:'1em'}}>Phone</span>
          <p  style={{marginTop:'.3em'}}>+1 403-966-3323</p>
        </Col>
        <Col xs={2} md={2}>
              <span style={{color:'white', fontSize:'12px', marginTop:'1em'}}>Device</span>
              <p  style={{marginTop:'.3em'}}>Samsung (Android 24)</p>
        </Col>
        <Col xs={2} md={2}>
              <FlatButton label="Report user" style={{color:'white', marginTop: '.5em'}}/>
        </Col>
        <Col xs={2} md={2}>
              <FlatButton label="OPEN PROFILE IN USER ADMIN" style={{color:'white', marginTop: '.5em'}}/>
        </Col>
      </Row>
    </Grid>
  </div>
          <Grid>
      <Row>
        <Col xs={6} md={6}>
          <Paper style={{padding: '1em'}}>My calls keep dropping</Paper>
          <Paper style={{padding: '1em', background: '#F8F8F8'}}></Paper>
          <Paper style={{padding: '1em'}}>
          <TextField
            hintText="Type message"
            multiLine={true}
            fullWidth={true}
          />
          </Paper>
                    <RaisedButton label="Send" primary={true} style={{float:'right', marginTop: '.5em'}}/>
        </Col>
      </Row>
    </Grid>

</div>
);

export default TtView;
