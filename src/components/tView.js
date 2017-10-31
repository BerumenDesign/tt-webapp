import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {Tabs, Tab} from 'material-ui/Tabs';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/exit-to-app';

const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  height: '80vh'
};

const floatRight = {
  display: 'flex',
  alignItems: 'flex-end'
};

const columnStyle = {
  margin: '0 20px',
  flex: '2 auto',
  with: '50%',
  background: "blue",
  border: '1px solid white'
};
const ticketData = {
  padding: '1em',
  display: 'flex',
  justifyContent: 'flexStart',
  width: '30%',
  order: '1',
  background: '#333',
  color: 'white',
  border: '1px solid white'
};
const listLabel = {
  fontSize: '.75em',
  display: 'block',
  marginTop: '20px'
};
const ticketChat = {
  padding: '0',
  width: '70%',
  display: 'flex',
  justifyContent: 'flexEnd',
  order: '1',
  background: '#333',
  color: 'white',
  border: '1px solid white'
};

const innerColumnStyle2 = {
  padding: '10px',
  with: '50%',
  order: '2',
  background: "red",
  border: '1px solid white'
};
const paperStyle = {
  padding: '1em'
};
const paperStyleDark = {
  padding: '1em',
  display: 'block',
  background: '#666',
  color: 'white',
  borderRadius: 0,
  height: '85vh'
};
const cardHeaderStyle = {
  marginBottom: 0
};
const timeStampStyle = {
  position: 'relative',
  top: '-59px',
  fontStyle: 'italic',
  float: 'right',
  color: '#666',
  borderRadius: 0
};
const timeStampChat = {
  position: 'relative',
  top: '-20px',
  fontStyle: 'italic',
  float: 'right',
  color: '#666',
  borderRadius: 0
};

const TtView = () => (
  <div>
    <AppBar title="Trouble Ticket" style={{
      backgroundColor: '#000',
      marginBottom: '1em'
    }} showMenuIconButton={false}/>
    <div style={wrapper}>
      <Grid fluid>
        <Row>
          <Col xs={2} style={paperStyleDark}>
            Tickets     <IconButton>
      <ActionHome />
    </IconButton>

            <Menu>
              <MenuItem primaryText="New" secondaryText="4" style={{color:'white'}}/>
              <MenuItem primaryText="In progress" secondaryText="5" style={{color:'white'}}/>
              <Divider/>
              <MenuItem primaryText="@You" secondaryText="2" style={{color:'white'}}/>
              <MenuItem primaryText="@John Smith" secondaryText="5" style={{color:'white'}}/>
              <MenuItem primaryText="@Jane Smith" secondaryText="2" style={{color:'white'}}/>
              <MenuItem primaryText="@Jordan Smith" secondaryText="5" style={{color:'white'}}/>
              <Divider/>
              <MenuItem primaryText="Processed" secondaryText="2" style={{color:'white'}}/>
            </Menu>
          </Col>
          <Col xs={3}>
            <Paper>
              <Subheader inset={false}>New tickets</Subheader>
              <div style={{
                overflow: 'auto',
                height: '80vh'
              }}>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 m ago</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 m ago</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 m ago</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 m ago</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 m ago</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 min</span>
                    I cannot connect to LTE</CardText>
                </Card>
                <Card>
                  <CardHeader style={{
                    paddingBottom: 0
                  }} title="Lebron James" subtitle="403-808-8997" avatar="images/jsa-128.jpg"/>
                  <CardText>
                    <span style={timeStampStyle}>5 min</span>
                    I cannot connect to LTE</CardText>
                </Card>
              </div>
            </Paper>
          </Col>
          <Col xs={7}>
            <Paper >
              <Grid>
                <Row>
                  <Col xs={12} style={{display: 'flex',}}>
                    <Subheader inset={false}>Your tickets in progress</Subheader>
                    <FlatButton style={floatRight} label="Transfer"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Tabs style={{
                      backgroundColor: 'white'
                    }}>>
                      <Tab label="LeBron James" style={{
                        backgroundColor: 'white',
                        color: '#666'
                      }}>
                        <Row>
                          <Col xs={3} style={{
                            padding: '1em',
                            height: '60vh',
                            backgroundColor: '#666',
                            color: 'white'
                          }}>
                            Ticket ID 89329-01
                            <span style={listLabel}>Duration</span>
                            00:05:00
                            <Divider style={{
                              marginTop: '1em'
                            }}/>
                            <span style={listLabel}>SSID</span>
                            SHAW-C598E0-EXT
                            <span style={listLabel}>Frequency</span>
                            2412
                            <span style={listLabel}>dBM</span>
                            -55
                            <Divider style={{
                              marginTop: '1em'
                            }}/>
                            <span style={listLabel}>Name</span>
                            LeBron James
                            <span style={listLabel}>Email</span>
                            leb@james.com
                            <span style={listLabel}>SSID</span>
                            +1 403=966-3323
                            <span style={listLabel}>Device</span>
                            Samsung (Android 24)
                          </Col>
                          <Col xs={9} style={{
                            padding: '1em',
                            height: '60vh',
                            backgroundColor: '#F8F8F8'
                          }}>
                            <div>
                              <div>You</div>
                              <div style={timeStampChat}>3 m ago</div>
                              <div>Hello, I am sorry to hear that, when was the last time it happened?</div>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab label="Kyrie Irving" style={{
                        backgroundColor: 'white',
                        color: '#666'
                      }}>
                        <div>
                          <p>
                            This is another in progress conversation.
                          </p>
                        </div>
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} style={{
                    padding: '1em',
                    width: '100%',
                  }}>
                    <TextField hintText="Type message" fullWidth={true}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} style={{
                    padding: '1em',
                    width: '100%',
                    textAlign: 'right',
                  }}>
                    <RaisedButton label="Send" primary={true}/>
                    <FlatButton  label="Mark as resolved"/>
                  </Col>
                </Row>

              </Grid>
            </Paper>
          </Col>
        </Row>
      </Grid>

    </div>
  </div>
);

export default TtView;
